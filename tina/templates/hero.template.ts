import { Template } from "tinacms";

export const HeroTemplate: Template = {
  name: "hero",
  label: "Hero",
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
      name: "cta",
      label: "Call to Action",
      type: "object",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      name: "socials",
      label: "Socials Links",
      type: "object",
      ui: {
        itemProps: (item) => ({
          label: item?.label,
        }),
      },
      list: true,
      fields: [
        {
          name: "icon",
          label: "Icon",
          type: "image",
        },
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
      ],
    },
  ],
};
