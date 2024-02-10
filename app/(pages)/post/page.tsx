import { client } from "@/tina/__generated__/databaseClient";
import type { PostConnectionQuery } from "@/tina/__generated__/types";
import { PostListPage } from "./_lib/post-list.page";

export default async function Page(): Promise<JSX.Element> {
  const result = await client.queries.postConnection();

  return (
    <PostListPage
      {...result}
      data={JSON.parse(JSON.stringify(result.data)) as PostConnectionQuery}
    />
  );
}
