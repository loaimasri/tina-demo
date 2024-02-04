import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";
import {
  TinaAuthJSOptions,
  AuthJsBackendAuthProvider,
  TinaCredentialsProvider,
} from "tinacms-authjs";

import { NextApiRequest, NextApiResponse } from "next";
import databaseClient from "@/tina/__generated__/databaseClient";
import { environment } from "@/config";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import { AbstractAuthProvider } from "tinacms";

export const NextAuthOptions = TinaAuthJSOptions({
  databaseClient,
  secret: environment.auth.secret,
  debug: true,
});

const isLocal = environment.general.isLocal === "true";

const tinaHandler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: NextAuthOptions,
      }),
  databaseClient,
});
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return tinaHandler(req, res);
};

export default handler;
