import type { Collection } from "tinacms";

export const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  format: "md",

  fields: [
    {
      type: "image",
      name: "cover",
      label: "Cover Image",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true,
    },
    {
      type: "datetime",
      name: "publishedAt",
      label: "Published At",
    },
  ],

  ui: {
    router: ({ document }) => `/post/${document._sys.filename}`,
    filename: {
      readonly: true,
      slugify: ({ title }: Record<string, string>) =>
        `${title?.replace(/\s+/g, "-").toLowerCase().slice(0, 20)}`,
    },
  },
  defaultItem() {
    return {
      title: "New Post",
      publishedAt: new Date(),
    };
  },
};
