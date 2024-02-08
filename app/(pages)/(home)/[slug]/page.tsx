import { PageContainer } from "../_lib/containers/page.container";
import { client } from "@/tina/__generated__/databaseClient";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const result = await client.queries.page({
    relativePath: `${slug}.md`,
  });

  return (
    <PageContainer {...result} data={JSON.parse(JSON.stringify(result.data))} />
  );
}
