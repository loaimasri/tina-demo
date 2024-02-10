"use client";
import { type PostConnectionQuery } from "@/tina/__generated__/types";
import React from "react";
import { useTina } from "tinacms/dist/react";
import { PostList } from "./containers/post-list";

type PostListProps = {
  data: PostConnectionQuery;
  variables: object;
  query: string;
};

export function PostListPage(props: PostListProps) {
  const { data } = useTina(props);

  return <PostList {...data} />;
}
