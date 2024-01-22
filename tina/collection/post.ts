import { Collection } from "tinacms";

export const Post : Collection={
    name: "post",
    label: "Posts",
    path: "content/posts",
    fields: [
      {
        type: "string",
        name: "title",
        label: "Title",
        isTitle: true,
        required: true,
      },
      {
        type: "rich-text",
        name: "body",
        label: "Body",
        isBody: true,
      },
    ],
    ui: {
      // This is an DEMO router. You can remove this to fit your site
      router: ({ document }) => `/post/${document._sys.filename}`,
    },
  }