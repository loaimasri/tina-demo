"use client";
import { PostQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function PostComponent(props: {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);

  const post = data?.post;

  return (
    <>
      <h1
        className="text-3xl font-bold"
        data-tina-field={tinaField(post, "title")}
      >
        {post.title}
      </h1>
      <div data-tina-field={tinaField(post, "body")}>
        <TinaMarkdown content={post.body} />
      </div>
    </>
  );
}
