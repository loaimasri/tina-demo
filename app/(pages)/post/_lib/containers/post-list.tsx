"use client";
import { type PostConnectionQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

import { AlertDialog } from "@components/ui/alert-dialog";
import { Input } from "@components/ui/input";

import { Button } from "@components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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

  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams?.get("search") ?? "",
  );

  useEffect(() => {
    setSearchTerm(searchParams?.get("search") ?? "");
  }, [searchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchTerm(value);

    const params = new URLSearchParams(searchParams?.toString());

    if (value) params.set("search", value);
    else params.delete("search");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSelectTag = (tag: string): void => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];

    const params = new URLSearchParams(searchParams?.toString());
    if (newSelectedTags.length > 0)
      params.set("tags", newSelectedTags.join(","));
    else params.delete("tags");

    const queryString = params.toString();
    router.push(`${pathname}?${queryString}`);
  };

  const filteredPosts = posts
    ?.filter((post) => {
      const matchesSearchTerm =
        post?.node?.title.toLowerCase().includes(searchTerm.toLowerCase()) ??
        post?.node?.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => {
          return post?.node?.tags.includes(tag);
        });

      return matchesSearchTerm && matchesTags;
    })
    .sort(
      (a, b) =>
        new Date(b?.node?.publishedAt ?? "").getTime() -
        new Date(a?.node?.publishedAt ?? "").getTime(),
    );

  const tags = Array.from(
    new Set(posts?.flatMap((post) => post?.node?.tags).filter(Boolean) ?? []),
  ) as string[];

  return (
    <section className="flex flex-col gap-3xl pt-3xl">
      <Input
        type="search"
        placeholder="Search something here"
        iconName="search"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="flex flex-wrap gap-xs">
        {tags?.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            selected={selectedTags.includes(tag)}
            onClick={handleSelectTag}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3xl">
        {filteredPosts?.map((post) => (
          <PostCard
            key={post?.node?.id}
            cover={post?.node?.cover ?? ""}
            title={post?.node?.title ?? ""}
            tags={post?.node?.tags ?? []}
            description={post?.node?.description ?? ""}
            publishedAt={post?.node?.publishedAt ?? ""}
            author={post?.node?.author ?? ""}
            link={`/post/${post?.node?._sys.breadcrumbs.join("/")}`}
          />
        ))}
      </div>

      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <Button variant="stroke">Show Dialog</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Separator />
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action>Continue</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </section>
  );
}
