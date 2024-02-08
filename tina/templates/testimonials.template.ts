import { Template } from "tinacms";

export const TestimonialsTemplate: Template = {
  name: "testimonials",
  label: "Testimonials",
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
      name: "testimonials",
      label: "Testimonials",
      type: "object",
      ui: {
        itemProps: (item) => ({
          label: item?.author?.name,
        }),
      },
      list: true,
      fields: [
        {
          name: "author",
          label: "Author",
          type: "object",
          fields: [
            {
              name: "name",
              label: "Name",
              type: "string",
            },
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "avatar",
              label: "Avatar",
              type: "image",
            },
          ],
        },
        {
          name: "quote",
          label: "Quote",
          type: "string",
          ui: {
            component: "textarea",
          },
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
