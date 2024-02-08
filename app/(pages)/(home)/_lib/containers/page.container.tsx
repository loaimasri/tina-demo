"use client";
import { PageQuery } from "@/tina/__generated__/types";
import { signIn, useSession } from "next-auth/react";
import { tinaField, useTina } from "tinacms/dist/react";
import { Button } from "../../../../_lib/components/ui";
import { Blocks } from "../components/block-renderer";

type PageContainerProps = {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
};

export function PageContainer(props: PageContainerProps) {
  const {
    data: { page },
  } = useTina(props);

  const { data: session } = useSession();

  const { title, requireAuth } = page;

  if (requireAuth && !session) {
    return <Button onClick={() => signIn()}>Sign in to view this Page</Button>;
  }

  return (
    <>
      <Blocks {...page} data-tina-field={tinaField(page)} />
    </>
  );
}
