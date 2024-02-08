import { Template } from "tinacms";

export const OurClientsTemplate: Template = {
  name: "ourClients",
  label: "Our Clients",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "clients",
      label: "Clients",
      type: "object",
      ui: {
        itemProps: (item) => ({
          label: item?.label,
        }),
      },
      list: true,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "logo",
          label: "Logo",
          type: "image",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      name: "background",
      label: "Background Color",
      list: true,
      ui: {
        component: "select",
      },
      options: [
        { label: "Main", value: "bg-secondary" },
        { label: "Light", value: "bg-secondary-light" },
        { label: "Transparent", value: "bg-transparent" },
      ],
    },
  ],
};
