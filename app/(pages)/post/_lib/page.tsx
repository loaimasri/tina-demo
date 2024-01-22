"use client";
import { PostConnectionQuery } from "@/tina/__generated__/types";
import React from "react";
import { useTina } from "tinacms/dist/react";
import { PostList } from "./containers/post-list";

type PostListProps = {
  data: PostConnectionQuery;
  variables: {};
  query: string;
};

export function PostListPage(props: PostListProps) {
  const { data } = useTina(props);

  return (
    <div className="bg-muted">
      <div className="flex flex-col gap-8 py-8">
        <PostList {...data} />
      </div>
    </div>
  );
}
