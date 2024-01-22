import client from "@/tina/__generated__/client";
import { PostComponent } from "../_lib/components/Post";

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries.post({
    relativePath: `${params.slug}.md`,
  });
  console.log(`${params.slug}.md`);

  return <PostComponent {...result} />;
}
