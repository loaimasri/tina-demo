import { Button } from "@components/ui";
import { PostConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PostCard from "../components/post-card";
import CategoryBadge from "../components/category-badge";

const categories = [
  "agile",
  "development",
  "javascript",
  "python",
  "react",
  "nextjs",
  "tailwindcss",
  "tina",
  "cms",
  "jamstack",
  "webdev",
  "webdesign",
  "webdevelopment",
  "web",
  "design",
  "development",
  "programming",
  "coding",
  "tech",
  "technology",
  "testing",
  "automation",
];

export function PostList(props: PostConnectionQuery) {
  const posts = props.postConnection.edges;
  return (
    <div className="container flex flex-col gap-8 pt-8">
      <div className="flex gap-x-4 gap-y-2 flex-wrap">
        {categories.map((category, index) => (
          <CategoryBadge
            key={category}
            selected={index % 3 == 1}
            category={category}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <PostCard
          title="What is Agile Development and why is it important?"
          description="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Nulla facilisi. Sed auctor, libero nec fermentum."
          tags={["agile", "development"]}
          publishedAt="January 4, 2024"
          publishedBy="John Doe"
        />
      </div>
    </div>
  );
}
