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
      label: "Authentication Options",
      name: "auth",
      type: "object",
      fields: [
        {
          label: "Require Authentication",
          name: "requireAuth",
          type: "boolean",
          ui: {
            description: "Require the user to be logged in to view this page",
          },
        },
        {
          label: "Roles",
          name: "roles",
          type: "string",
          list: true,
          ui: {
            description: "A list of roles that are allowed to view this page",
          },
          options: [
            {
              label: "Admin",
              value: "admin",
            },
            {
              label: "Team Lead",
              value: "lead",
            },
            {
              label: "Team Member",
              value: "member",
            },
          ],
        },
      ],
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
