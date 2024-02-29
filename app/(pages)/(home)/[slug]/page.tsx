export const dynamicParams = true;
export const dynamic = "force-static";

import { client } from "@/tina/__generated__/databaseClient";
import type { PageQuery } from "@/tina/__generated__/types";
import { PageContainer } from "../_lib/containers/page.container";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const {
    data: {
      pageConnection: { edges: pages },
    },
  } = await client.queries.pageConnection();

  return (
    pages?.map((post) => ({ slug: post?.node?._sys.filename ?? "" })) ?? []
  );
}

export default async function Page({
  params: { slug },
}: Props): Promise<JSX.Element> {
  const result = await client.queries.page({
    relativePath: `${slug}.md`,
  });

  return (
    <PageContainer
      {...result}
      data={JSON.parse(JSON.stringify(result.data)) as PageQuery}
    />
  );
}
