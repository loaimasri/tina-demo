import { BasePage } from "@/app/(pages)/(home)/_lib/components/base-page";
import { client } from "@/tina/__generated__/databaseClient";

import { Hero, OurClients, Services, Testimonials } from "./_lib/blocks";

export default async function HomePage() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <>
      <Hero />

      <Services />

      <OurClients />

      <Testimonials />
    </>
  );
}
