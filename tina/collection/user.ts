import type { Collection, TinaField } from "tinacms";
import { TinaUserCollection } from "tinacms-authjs/dist/tinacms";

const tinaUser = TinaUserCollection;

const newlyCreatedField = [
  {
    label: "Profile Picture",
    name: "profile",
    type: "image",
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
] as TinaField[];

type TinaFieldWithFields = {
  fields?: TinaField[];
} & TinaField;

let firstField: TinaFieldWithFields | undefined;

if (Array.isArray(tinaUser.fields)) {
  firstField = (tinaUser.fields as TinaFieldWithFields[])[0];
}

if (firstField) firstField.fields?.push(...newlyCreatedField);

export const User: Collection = {
  ...tinaUser,
} as Collection;
