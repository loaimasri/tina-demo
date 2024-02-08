import { PageContainer } from "./_lib/containers/page.container";
import { client } from "@/tina/__generated__/databaseClient";

import { Hero, OurClients, Services, Testimonials } from "./_lib/blocks";

export default async function HomePage() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <>
      <PageContainer
        {...result}
        data={JSON.parse(JSON.stringify(result.data))}
      />

    </>
  );
}
