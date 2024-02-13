import type { PostConnectionQuery } from "@/tina/__generated__/types";
import { useState } from "react";
import Tag from "../components/tag";
import { PostCard } from "../components/post-card";

export function PostList(props: PostConnectionQuery): JSX.Element {
  const posts = props.postConnection.edges;

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags: string[] | undefined = posts?.reduce((acc: string[], curr) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (Array.isArray(curr?.node?.tags)) acc.push(...curr?.node?.tags);
    return acc;
  }, []);

  console.log("selected.tags", selectedTags);

  const handleSelectTag = (tag: string): void => {
    setSelectedTags((prevTags) =>
      prevTags?.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag],
    );
  };

  return (
    <section className="flex flex-col gap-8 pt-8">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {tags?.map((category) => (
          <Tag
            key={category}
            tag={category}
            selected={selectedTags.includes(category)}
            onClick={handleSelectTag}
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
    </section>
  );
}
