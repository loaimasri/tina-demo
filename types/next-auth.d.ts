/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type Profile as DefaultProfile, type DefaultSession } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

type Role = string;

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      sub?: string;
      roles: Role[];
      passwordChangeRequired?: boolean;
    };
  }

  interface Profile extends DefaultProfile {
    roles: Role[];
  }
}

declare module "next-auth/jwt" {
  type JWT = {
    discord?: string | null;
    roles: Role[];
    passwordChangeRequired?: boolean;
  } & DefaultJWT;
}
