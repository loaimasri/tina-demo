/* eslint-disable @typescript-eslint/no-restricted-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type NextApiRequest, type NextApiResponse } from "next";
import { NextAuthOptions } from "../tina/[...routes]";

import NextAuth from "next-auth/next";
const handler = (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(NextAuthOptions)(req, res);

export default handler;
