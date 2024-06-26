import { LocalBackendAuthProvider, TinaNodeBackend } from "@tinacms/datalayer";

import { FTSBackendAuthProvider } from "@/app/_lib/utils/fts-backend-auth-provider";
import { environment } from "@/config";
import databaseClient from "@/tina/__generated__/databaseClient";
import { NextAuthOptions } from "@utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";

const isLocal = environment.tina.isLocal === "true";

const tinaHandler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : FTSBackendAuthProvider({
        authOptions: NextAuthOptions,
      }),
  databaseClient,
});
const handler = (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return tinaHandler(req, res);
};

export default handler;
