import type { Collection } from "tinacms";

export const Global: Collection = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  match: {
    include: "index",
  },
  ui: {
    global: true,
    allowedActions: { create: false, delete: false },
    router: () => `/`,
  },

  fields: [
    {
      type: "object",
      label: "Header",
      name: "header",
      fields: [
        {
          name: "logo",
          label: "Logo",
          type: "object",
          fields: [
            {
              type: "image",
              label: "White Logo",
              name: "main",
            },
            {
              type: "image",
              label: "normal Logo",
              name: "dark",
            },
          ],
        },
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item: Record<string, string>) => {
              return { label: item?.label };
            },
            defaultItem: {
              href: "home",
              label: "Home",
            },
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
            },
            {
              type: "string",
              label: "Label",
              name: "label",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "object",
          label: "Social Links",
          name: "social",
          fields: [
            {
              type: "string",
              label: "Facebook",
              name: "facebook",
            },
            {
              type: "string",
              label: "Twitter",
              name: "twitter",
            },
            {
              type: "string",
              label: "Instagram",
              name: "instagram",
            },
            {
              type: "string",
              label: "Github",
              name: "github",
            },
          ],
        },
      ],
    },
    // {
    //   type: "object",
    //   label: "Theme",
    //   name: "theme",

    //   fields: [
    //     {
    //       type: "string",
    //       label: "Primary Color",
    //       name: "color",
    //       ui: {
    //         component: ColorPickerInput,
    //       },
    //     },
    //     {
    //       type: "string",
    //       name: "font",
    //       label: "Font Family",
    //       options: [
    //         {
    //           label: "System Sans",
    //           value: "sans",
    //         },
    //         {
    //           label: "Nunito",
    //           value: "nunito",
    //         },
    //         {
    //           label: "Lato",
    //           value: "lato",
    //         },
    //       ],
    //     },
    //     {
    //       type: "string",
    //       name: "darkMode",
    //       label: "Dark Mode",
    //       options: [
    //         {
    //           label: "System",
    //           value: "system",
    //         },
    //         {
    //           label: "Light",
    //           value: "light",
    //         },
    //         {
    //           label: "Dark",
    //           value: "dark",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};
