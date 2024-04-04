import { environment } from "@/config";
import databaseClient from "@/tina/__generated__/databaseClient";
import type { Account, Profile, Session, User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { JWT } from "next-auth/jwt";
import AzureAdProvider from "next-auth/providers/azure-ad";
import { TinaAuthJSOptions, TinaCredentialsProvider } from "tinacms-authjs";

const {
  tina: { debug },
  auth: { secret, azure },
} = environment;

const uidProp: keyof Session["user"] = "sub";

type AuthorizeResult = {
  data: {
    authorize?: {
      _password?: {
        passwordChangeRequired: boolean;
      };
    };
  };
};

type JWTCallbackParams = {
  token: JWT;
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
  trigger?: "signIn" | "signUp" | "update" | undefined;
  isNewUser?: boolean | undefined;
  session?: Session | undefined;
};

const jwtCallback = async ({
  token: jwt,
  account,
  profile,
}: JWTCallbackParams): Promise<JWT> => {
  if (account) {
    try {
      if (account.provider === "azure-ad") {
        jwt.roles = profile?.roles ?? [];
      }

      if (jwt?.[uidProp]) {
        const sub = jwt[uidProp];
        const {
          data: { authorize },
        } = (await databaseClient.authorize({
          sub,
        })) as AuthorizeResult;

        jwt.role = "user";
        jwt.passwordChangeRequired =
          authorize?._password?.passwordChangeRequired ?? false;
      } else if (debug) {
        console.log(`jwt missing specified uidProp: ${uidProp}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (debug) {
        console.table(jwt);
      }
    }

    jwt.role ??= "guest";
  }
  return jwt;
};

const sessionCallback = async ({
  session,
  token: jwt,
}: {
  session: Session;
  token: JWT;
}): Promise<Session> => {
  session.user.roles = jwt.roles;
  session.user.passwordChangeRequired = jwt.passwordChangeRequired;
  session.user[uidProp] = jwt[uidProp];
  return session;
};

export const NextAuthOptions = TinaAuthJSOptions({
  databaseClient,
  secret,
  debug: debug === "true",
  uidProp,

  overrides: {
    providers: [
      TinaCredentialsProvider({
        databaseClient,
      }),
      AzureAdProvider({
        clientId: azure.clientId,
        clientSecret: azure.clientSecret,
        tenantId: azure.tenantId,
      }),
    ],

    callbacks: {
      jwt: jwtCallback,
      session: sessionCallback,
    },
  },
});
