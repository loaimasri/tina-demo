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
      <Card.Content className="flex flex-col gap-2 overflow-hidden p-0 md:flex-row ">
        <Image
          src={cover}
          alt={title}
          width={185}
          height={208}
          className="min-h-full w-full rounded-xl object-cover md:min-h-[208px] md:w-[185px] md:rounded-l-xl md:rounded-r-none"
        />

        <div className="flex w-full flex-col p-6">
          <Card.Header className="mb-2 p-0">
            <div className="flex gap-2">
              <p className="text-xs">
                {format(new Date(publishedAt), "MMMM dd, yyyy")} by
              </p>
              <p className="text-xs font-bold text-primary">{author}</p>
            </div>
          </Card.Header>
          <div className="flex flex-col gap-1">
            <Card.Title className="text-2xl font-bold">{title}</Card.Title>
            <Card.Description className="line-clamp-2">
              {description}
            </Card.Description>
          </div>
          <Card.Footer className="mt-6 flex justify-between p-0">
            <Link href={link} className="text-sm font-medium">
              Read more...
            </Link>

            <div className="pointer-events-none space-x-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card.Footer>
        </div>
      </Card.Content>
    </Card>
  );
}
