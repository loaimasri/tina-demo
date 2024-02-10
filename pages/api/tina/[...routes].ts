import { LocalBackendAuthProvider, TinaNodeBackend } from "@tinacms/datalayer";
import { AuthJsBackendAuthProvider, TinaAuthJSOptions } from "tinacms-authjs";

import { environment } from "@/config";
import databaseClient from "@/tina/__generated__/databaseClient";
import type { NextApiRequest, NextApiResponse } from "next";

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
