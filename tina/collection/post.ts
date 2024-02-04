import { Collection } from "tinacms";

export const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  format: "md",

  ui: {
    router: ({ document }) => `/post/${document._sys.filename}`,
    filename: {
      readonly: true,
      slugify: ({ title }) =>
        `${title?.replace(/\s+/g, "-").toLowerCase().slice(0, 20)}`,
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};
