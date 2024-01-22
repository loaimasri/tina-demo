import client from "@/tina/__generated__/client";
import { PostListPage } from "./_lib/page";

export default async function Page() {
  const result = await client.queries.postConnection();

  return <PostListPage {...result} />;
}
