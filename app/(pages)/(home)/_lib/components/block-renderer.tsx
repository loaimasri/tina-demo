import { Page, PageBlocks } from "@/tina/__generated__/types";
import { Hero, OurClients, Services, Testimonials } from "../blocks";
import { tinaField } from "tinacms/dist/react";

type BlockRendererProps = Omit<Page, "id" | "_sys" | "_values">;

export const Blocks = ({ blocks }: BlockRendererProps) => {
  return (
    <>
      {blocks &&
        blocks.map((block, index) => (
          <div key={index} data-tina-field={tinaField(block as any)}>
            <Block {...block} />
          </div>
        ))}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksHero":
      return <Hero {...block} />;
    case "PageBlocksServices":
      return <Services {...block} />;
    case "PageBlocksOurClients":
      return <OurClients {...block} />;
    case "PageBlocksTestimonials":
      return <Testimonials {...block} />;

    default:
      return null;
  }
};
