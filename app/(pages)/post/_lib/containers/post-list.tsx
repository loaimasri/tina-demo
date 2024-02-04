import { Button } from "@components/ui";
import { PostConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function PostList(props: PostConnectionQuery) {
  const posts = props.postConnection.edges;
  return (
    <div className="container flex flex-col gap-10 py-10">
      {posts?.map((edge, i) => {
        const post = edge?.node;
        if (!post) return null;

        const href = `/post/${post._sys.breadcrumbs.join("/")}`;

        return (
          <div key={i} className="p-6 bg-muted  shadow-md rounded-lg">
            <Link href={href}>
              <p
                className="text-xl font-semibold mb-3 hover:text-blue-600"
                data-tina-field={tinaField(post, "title")}
              >
                {post.title}
              </p>
            </Link>

            <TinaMarkdown
              content={post.body}
              data-tina-field={tinaField(post, "body")}
            />
            <div className="text-right">
              <Button asChild className="mt-4" size="sm">
                <Link href={href}>Read More...</Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
