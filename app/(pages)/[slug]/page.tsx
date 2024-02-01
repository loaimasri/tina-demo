import { PageComponent } from "@/components/app/page";
import { client } from "@/tina/__generated__/databaseClient";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const result = await client.queries.page({
    relativePath: `${slug}.md`,
  });

  return (
    <PageComponent {...result} data={JSON.parse(JSON.stringify(result.data))} />
  );
}
