import { Template } from "tinacms";

export const ServicesTemplate: Template = {
  name: "services",
  label: "Services",
  fields: [
    { name: "id", label: "Id", type: "string" },
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
      name: "services",
      label: "Services",
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
          name: "icon",
          label: "Icon",
          type: "object",
          fields: [
            {
              name: "src",
              label: "Image",
              type: "image",
            },
            {
              name: "alt",
              label: "Alt",
              type: "string",
            },
            {
              name: "color",
              label: "Color",
              type: "string",
              ui: {
                component: "color",
              },
            },
          ],
        },
        {
          name: "description",
          label: "Description",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
};
