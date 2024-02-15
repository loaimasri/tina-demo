import { Card } from "@/app/_lib/components/ui/card";
import { Badge } from "@components/ui/badge";
import { format } from "date-fns";

import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  cover: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
  author: string;
  link: string;
};

export function PostCard({
  cover,
  title,
  tags,
  description,
  publishedAt,
  author,
  link,
}: PostCardProps): JSX.Element {
  return (
    <Card>
      <Card.Content className="flex flex-col gap-[8px] overflow-hidden p-[0] md:flex-row ">
        <Image
          src={cover}
          alt={title}
          width={185}
          height={208}
          className="min-h-full w-full rounded-xl object-cover md:min-h-[208px] md:w-[185px] md:rounded-l-xl md:rounded-r-none"
        />

        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-3xl p-3xl">
            <div className="flex flex-col gap-xs">
              <Card.Header className=" p-[0]">
                <span className="flex gap-xs text-body1 font-medium">
                  <p>{format(new Date(publishedAt), "MMMM dd, yyyy")} by</p>
                  <p className="text-primary">{author}</p>
                </span>
              </Card.Header>
              <Card.Title className="text-title1 font-bold">{title}</Card.Title>
              <Card.Description className="line-clamp-2 text-body1 text-secondary-foreground">
                {description}
              </Card.Description>
            </div>

            <Card.Footer className=" flex justify-between p-[0]">
              <Link href={link} className="text-body1 font-medium">
                Read more...
              </Link>

              <div className="pointer-events-none space-x-xs">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card.Footer>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
