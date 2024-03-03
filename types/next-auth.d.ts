/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type DefaultSession } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

type Role = "user" | "guest";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      sub?: string;
      role?: Role;
      passwordChangeRequired?: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  type JWT = {
    discord?: string | null;
    role?: Role;
    passwordChangeRequired?: boolean;
  } & DefaultJWT;
}
