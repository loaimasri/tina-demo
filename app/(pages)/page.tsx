import { PageComponent } from "@/components/app/page";
import { client } from "@/tina/__generated__/databaseClient";

export default async function Page() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <PageComponent {...result} data={JSON.parse(JSON.stringify(result.data))} />
  );
}
