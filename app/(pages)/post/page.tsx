import { client } from "@/tina/__generated__/databaseClient";
import { PostListPage } from "./_lib/post-list-page";

export default async function Page() {
  const result = await client.queries.postConnection();

  return (
    <PostListPage {...result} data={JSON.parse(JSON.stringify(result.data))} />
  );
}


