import type { Collection } from "tinacms";
import {
  HeroTemplate,
  TestimonialsTemplate,
  ServicesTemplate,
  OurClientsTemplate,
} from "../templates";

export const Page: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      name: "title",
      type: "string",
      required: true,
    },
    {
      label: "Require Auth",
      name: "requireAuth",
      type: "boolean",
      required: true,
    },
    {
      label: "Sections",
      name: "blocks",
      type: "object",
      ui: {
        visualSelector: true,
      },
      list: true,
      templates: [
        HeroTemplate,
        ServicesTemplate,
        OurClientsTemplate,
        TestimonialsTemplate,
      ],
    },
  ],
};
