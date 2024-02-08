import { BasePage } from "../_lib/components/base-page";
import { client } from "@/tina/__generated__/databaseClient";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const result = await client.queries.page({
    relativePath: `${slug}.md`,
  });

  return (
    <BasePage {...result} data={JSON.parse(JSON.stringify(result.data))} />
  );
}
