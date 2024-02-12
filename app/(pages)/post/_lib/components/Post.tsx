"use client";
import type { PostQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export function Post(props: {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}): JSX.Element {
  const { data } = useTina(props);

  const post = data?.post;

  console.log(post);

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-8">
      <h1>hello world</h1>
    </div>
  );
}
