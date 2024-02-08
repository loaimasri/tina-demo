import type { Collection } from "tinacms";
import { HeroTemplate } from "../templates/hero.template";
import { ServicesTemplate } from "../templates/services.template";
import { OurClientsTemplate } from "../templates/our-clients.template";

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
      templates: [HeroTemplate, ServicesTemplate, OurClientsTemplate],
    },
  ],
};
