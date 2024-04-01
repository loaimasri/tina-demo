import { environment } from "@/config";
import databaseClient from "@/tina/__generated__/databaseClient";
import type { Account, Profile, Session, User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { JWT } from "next-auth/jwt";
import DiscordProvider from "next-auth/providers/discord";
import { TinaAuthJSOptions, TinaCredentialsProvider } from "tinacms-authjs";

const {
  tina: { debug },
  auth: { secret, discord },
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
}: JWTCallbackParams): Promise<JWT> => {
  if (account) {
    if (debug) {
      console.table(jwt);
    }
    try {
      if (account.provider === "discord") {
        //TODO: here we should check the user role from attributes we got from discord
        jwt.discord = "discord";

        console.log("discord account", jwt);
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
  session.user.role = jwt.role;
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
      DiscordProvider({
        clientId: discord.clientId,
        clientSecret: discord.clientSecret,
      }),
    ],

    callbacks: {
      jwt: jwtCallback,
      session: sessionCallback,
    },
  },
});
