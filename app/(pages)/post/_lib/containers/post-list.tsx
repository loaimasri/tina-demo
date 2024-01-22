import { PostConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function PostList(props: PostConnectionQuery) {
  const posts = props.postConnection.edges;
  return (
    <div className="bg-muted">
      <div className="container flex flex-col gap-8 py-8">
        {posts?.map((edge, i) => {
          const post = edge?.node;
          if (!post) return null;

          return (
            <div key={i}>
              <p className="text-lg" data-tina-field={tinaField(post, "title")}>
                {post.title}
              </p>
              <br />

              <TinaMarkdown
                content={post.body}
                data-tina-field={tinaField(post, "body")}
              />

              <Link href={`/post/${post._sys.breadcrumbs.join("/")}`}>
                ReadMore...
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
