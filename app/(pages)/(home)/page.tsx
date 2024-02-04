import { BasePage } from "@/app/_lib/components/core/page";
import { client } from "@/tina/__generated__/databaseClient";

export default async function HomePage() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <BasePage {...result} data={JSON.parse(JSON.stringify(result.data))} />
  );
}
