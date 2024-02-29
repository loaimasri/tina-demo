export const dynamicParams = true;
export const dynamic = "force-static";

import { client } from "@/tina/__generated__/databaseClient";
import type { PostQuery } from "@/tina/__generated__/types";
import { Post } from "../_lib/components/Post";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const {
    data: {
      postConnection: { edges: posts },
    },
  } = await client.queries.postConnection();

  return (
    posts?.map((post) => ({ slug: post?.node?._sys.filename ?? "" })) ?? []
  );
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const result = await client.queries.post({
    relativePath: `${params.slug}.md`,
  });

  return (
    <Post
      {...result}
      data={JSON.parse(JSON.stringify(result.data)) as PostQuery}
    />
  );
}
