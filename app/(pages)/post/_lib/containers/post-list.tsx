"use client";
import { type PostConnectionQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PostCard } from "../components/post-card";
import { Tag } from "../components/tag";

type PostListProps = {
  data: PostConnectionQuery;
  variables: object;
  query: string;
};

export function PostList(props: PostListProps): JSX.Element {
  const {
    data: {
      postConnection: { edges: posts },
    },
  } = useTina(props);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedTags = searchParams?.get("tags")?.split(",") ?? [];

  console.log("selectedTags", selectedTags);

  const tags: string[] = Array.from(
    new Set(
      posts?.reduce((acc: string[], curr) => {
        if (Array.isArray(curr?.node?.tags)) acc.push(...curr?.node?.tags);
        return acc;
      }, []),
    ),
  );

  const handleSelectTag = (tag: string): void => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];

    const params = new URLSearchParams(searchParams?.toString());
    if (newSelectedTags.length > 0) {
      params.set("tags", newSelectedTags.join(","));
    } else {
      params.delete("tags");
    }
    const queryString = params.toString();
    router.push(`${pathname}${queryString ? "?" + queryString : ""}`);
  };

  return (
    <section className="flex flex-col gap-8 pt-8">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {tags?.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            selected={selectedTags.includes(tag)}
            onClick={handleSelectTag}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {posts
          ?.filter(
            (post) =>
              selectedTags.length === 0 ||
              post?.node?.tags?.some((tag: string) =>
                selectedTags.includes(tag),
              ),
          )
          .sort(
            (a, b) =>
              new Date(b?.node?.publishedAt ?? "").getTime() -
              new Date(a?.node?.publishedAt ?? "").getTime(),
          )
          .map((post) => (
            <PostCard
              key={post?.node?.id}
              cover={post?.node?.cover ?? ""}
              title={post?.node?.title ?? ""}
              tags={post?.node?.tags ?? []}
              description={post?.node?.description ?? ""}
              publishedAt={post?.node?.publishedAt ?? ""}
              author={post?.node?.author ?? ""}
            />
          ))}
      </div>
    </section>
  );
}
