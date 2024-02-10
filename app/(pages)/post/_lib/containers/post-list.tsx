import type { PostConnectionQuery } from "@/tina/__generated__/types";
import { Button } from "@components/ui";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";

export function PostList(props: PostConnectionQuery): JSX.Element {
  const posts = props.postConnection.edges;
  return (
    <div className="container flex flex-col gap-10 py-10">
      {posts?.map((edge) => {
        const post = edge?.node;
        if (!post) return null;

        const href = `/post/${post._sys.breadcrumbs.join("/")}`;

        return (
          <div
            key={post.__typename}
            className="rounded-lg bg-muted  p-6 shadow-md"
          >
            <Link href={href}>
              <p
                className="mb-3 text-xl font-semibold hover:text-blue-600"
                data-tina-field={tinaField(post, "title")}
              >
                {post.title}
              </p>
            </Link>

            <TinaMarkdown
              content={post.body as TinaMarkdownContent}
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
