import NextAuth from "next-auth/next";
import { NextAuthOptions } from "../tina/[...routes]";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(NextAuthOptions)(req, res);

export default handler;
