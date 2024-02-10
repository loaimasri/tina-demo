import { client } from "@/tina/__generated__/databaseClient";
import type { PostQuery } from "@/tina/__generated__/types";
import { Post } from "../_lib/components/Post";

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
