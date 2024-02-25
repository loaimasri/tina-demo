import { client } from "@/tina/__generated__/databaseClient";
import type { PageQuery } from "@/tina/__generated__/types";
import { PageContainer } from "./_lib/containers/page.container";

export default async function HomePage(): Promise<JSX.Element> {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <PageContainer
      {...result}
      data={JSON.parse(JSON.stringify(result.data ?? {})) as PageQuery}
    />
  );
}
