import { type Page, type PageBlocks } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Hero, OurClients, Services, Testimonials } from "../blocks";

type BlockRendererProps = Omit<Page, "id" | "_sys" | "_values">;

const Block = (block: PageBlocks): JSX.Element | null => {
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

export const Blocks = ({ blocks }: BlockRendererProps): JSX.Element => {
  return (
    <div className="bg-transparent">
      {blocks?.map((block, i) => (
        <div
          key={`${block?.__typename + String(i)}`}
          data-tina-field={block ? tinaField(block) : null}
        >
          <Block {...block} />
        </div>
      ))}
    </div>
  );
};
