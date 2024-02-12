import type { PostConnectionQuery } from "@/tina/__generated__/types";
import CategoryBadge from "../components/category-badge";
import { PostCard } from "../components/post-card";

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

export function PostList(props: PostConnectionQuery): JSX.Element {
  const posts = props.postConnection.edges;
  console.log(posts);

  return (
    <section className="flex flex-col gap-8 pt-8">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {categories.map((category, index) => (
          <CategoryBadge
            key={category}
            selected={index % 3 === 1}
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
    </section>
  );
}
