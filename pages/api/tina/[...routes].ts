import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";

import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from "tinacms-authjs";

import { NextApiRequest, NextApiResponse } from "next";
import databaseClient from "@/tina/__generated__/databaseClient";
import { environment } from "@/config";

const isLocal = environment.general.isLocal === "true";

const tinaHandler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient: databaseClient,
          secret: environment.auth.secret,
        }),
      }),
  databaseClient,
});
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return tinaHandler(req, res);
};

export default handler;
