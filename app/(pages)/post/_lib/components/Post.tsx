"use client";
import type { PostQuery } from "@/tina/__generated__/types";
import { Icon } from "@components/icon";
import { Button } from "@components/ui";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";

export function Post(props: {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}): JSX.Element {
  const { data } = useTina(props);
  const router = useRouter();

  const post = data?.post;
  const { cover, title, publishedAt, author } = post;

  const body = data?.post?.body as TinaMarkdownContent;

  return (
    <div className="relative bg-background">
      <Button
        type="button"
        variant="icon"
        size="icon"
        className="absolute left-[1.5rem] top-[1.5rem] z-10 rounded-full"
        onClick={() => router.back()}
      >
        <Icon name="arrowDownward" />
      </Button>

      <Image
        src={cover}
        alt={title}
        width={185}
        height={408}
        className="h-[408px] w-full object-cover"
        quality={100}
      />

      <div className="container">
        <div className="h-[91px] w-full">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-[8px] py-[16px]">
              <h1
                className="text-title1 font-bold leading-8"
                data-tina-field={tinaField(post, "title")}
              >
                {title}
              </h1>
              <div className="flex gap-[8px]">
                <p
                  className="text-body1"
                  data-tina-field={tinaField(post, "publishedAt")}
                >
                  {format(new Date(publishedAt ?? ""), "MMMM dd, yyyy")} by
                </p>
                <p
                  className="text-body1 font-medium text-primary"
                  data-tina-field={tinaField(post, "author")}
                >
                  {author}
                </p>
              </div>
            </div>
            <div className="ml-auto flex gap-[8px]">
              <Button
                variant="outline"
                size="icon"
                type="button"
                className="rounded-full"
              >
                <Icon name="heartStroke" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                type="button"
                className="rounded-full"
              >
                <Icon name="share" />
              </Button>
            </div>
          </div>
          <hr className="border-t border-border" />

          <div className="prose-xl py-[16px]">
            <TinaMarkdown
              content={body}
              data-tina-field={tinaField(post, "body")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
