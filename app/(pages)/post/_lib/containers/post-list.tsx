import { Button } from "@components/ui";
import { PostConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PostCard from "../components/post-card";

export function PostList(props: PostConnectionQuery) {
  const posts = props.postConnection.edges;
  return (
    <div className="container flex flex-col gap-10 py-10">
      <PostCard
        title="What is Agile Development and why is it important?"
        description="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Nulla facilisi. Sed auctor, libero nec fermentum."
        tags={["agile", "development"]}
        publishedAt="January 4, 2024"
        publishedBy="John Doe"
      />
    </div>
  );
}
