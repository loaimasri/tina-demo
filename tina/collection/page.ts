import { Collection } from "tinacms";

export const Page: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "md",
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
  ],
};
