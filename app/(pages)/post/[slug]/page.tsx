import { client } from "@/tina/__generated__/databaseClient";
import { Post } from "../_lib/components/Post";

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries.post({
    relativePath: `${params.slug}.md`,
  });

  return <Post {...result} data={JSON.parse(JSON.stringify(result.data))} />;
}
