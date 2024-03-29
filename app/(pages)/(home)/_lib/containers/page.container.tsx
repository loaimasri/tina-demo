"use client";
import { type PageQuery } from "@/tina/__generated__/types";
import { Button } from "@components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { tinaField, useTina } from "tinacms/dist/react";
import { Blocks } from "../components/block-renderer";

type PageContainerProps = {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
};

export function PageContainer(props: PageContainerProps): JSX.Element {
  const {
    data: { page },
  } = useTina(props);

  const { data: session } = useSession();

  const { auth } = page;

  if (auth?.requireAuth && !session) {
    return <Button onClick={() => signIn()}>Sign in to view this Page</Button>;
  }
  // const roles:string[]= [
  //   "admin",
  //   "editor",
  //   "viewer"
  // ]

  //TODO: extend the session to have roles attribute and accessing page for current logged in user

  return <Blocks {...page} data-tina-field={tinaField(page)} />;
}
