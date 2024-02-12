import type { Collection } from "tinacms";
import { TinaUserCollection } from "tinacms-authjs/dist/tinacms";

export const User: Collection = {
  ...TinaUserCollection,
  fields: [
    {
      ...(TinaUserCollection.fields ?? [])[0],
      fields: [
        {
          type: "string",
          label: "Username",
          name: "username",
          uid: true,
          required: true,
        },
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Email",
          name: "email",
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
  ],
} as Collection;
