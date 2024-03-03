/* eslint-disable @typescript-eslint/no-unsafe-return */
import { NextAuthOptions } from "@utils/auth";
import { type NextApiRequest, type NextApiResponse } from "next";

import NextAuth from "next-auth/next";
const handler = (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(NextAuthOptions)(req, res);

export default handler;
