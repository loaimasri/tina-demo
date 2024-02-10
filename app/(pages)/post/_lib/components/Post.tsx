"use client";
import type { PostQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";

export function Post(props: {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}): JSX.Element {
  const { data } = useTina(props);

  const post = data?.post;

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-8">
      <h1
        className="mb-4 text-4xl font-bold md:mb-6 md:text-5xl"
        data-tina-field={tinaField(post, "title")}
      >
        {post.title}
      </h1>
      <div data-tina-field={tinaField(post, "body")}>
        <TinaMarkdown content={post.body as TinaMarkdownContent} />
      </div>
    </div>
  );
}
