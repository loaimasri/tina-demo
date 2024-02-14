import { client } from "@/tina/__generated__/databaseClient";
import type { PostConnectionQuery } from "@/tina/__generated__/types";
import { PostList } from "./_lib/containers/post-list";

export default async function Page(): Promise<JSX.Element> {
  const result = await client.queries.postConnection();

  return (
    <PostList
      {...result}
      data={JSON.parse(JSON.stringify(result.data)) as PostConnectionQuery}
    />
  );
}
