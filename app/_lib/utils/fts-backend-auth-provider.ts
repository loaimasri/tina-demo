import type { BackendAuthProvider } from "@tinacms/datalayer";
import NextAuth, { type AuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";
import { TINA_CREDENTIALS_PROVIDER_NAME } from "tinacms-authjs/dist/tinacms";

export const FTS_TINA_ADMIN_ROLE = "tina-admin";

export const FTSBackendAuthProvider = ({
  authOptions,
}: {
  authOptions: AuthOptions;
}): BackendAuthProvider => {
  const authProvider: BackendAuthProvider = {
    initialize: async () => {
      if (!authOptions.providers?.length) {
        throw new Error("No auth providers specified");
      }
      const [provider, ...rest] = authOptions.providers;
      if (
        rest.length > 0 ||
        provider.type !== "credentials" ||
        provider.name !== TINA_CREDENTIALS_PROVIDER_NAME
      ) {
        console.warn(
          `WARNING: Catch-all api route ['/api/tina/*'] with specified Auth.js provider ['${provider.name}'] not supported. See https://tina.io/docs/self-hosted/overview/#customprovider for more information.`,
        );
      }
    },
    isAuthorized: async (req, res) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const session = await getServerSession(req, res, authOptions);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (!req.session) {
        Object.defineProperty(req, "session", {
          value: session,
          writable: false,
        });
      }

      if (!session?.user) {
        return {
          errorCode: 401,
          errorMessage: "Unauthorized",
          isAuthorized: false,
        };
      }
      console.log("session.user", session.user);

      if (!session.user.roles?.includes(FTS_TINA_ADMIN_ROLE)) {
        return {
          errorCode: 403,
          errorMessage: "Forbidden",
          isAuthorized: false,
        };
      }
      return { isAuthorized: true };
    },
    extraRoutes: {
      auth: {
        secure: false,

        handler: async (req, res, opts) => {
          // The domain is not important here, we just need to parse the pathName
          const url = new URL(
            req.url ?? "",
            `http://${req.headers?.host ?? "localhost"}`,
          );

          // extract next auth sub routes
          const authSubRoutes = url.pathname
            ?.replace(`${opts?.basePath}auth/`, "") // basePath always has leading and trailing slash
            ?.split("/");

          // This is required for NextAuth to work properly
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          (req.query as { nextauth: string[] }).nextauth = authSubRoutes;
          await NextAuth(authOptions)(req, res);
        },
      },
    },
  };
  return authProvider;
};
