import { Badge } from "@components/ui/badge";
import { Card } from "@/app/_lib/components/ui/card";

import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
  publishedBy: string;
};

export function PostCard({
  title,
  tags,
  description,
  publishedAt,
  publishedBy,
}: PostCardProps): JSX.Element {
  return (
    <Card>
      <Card.Content className="flex flex-col gap-2 overflow-hidden p-0 md:flex-row">
        <Image
          src="/home-header.png"
          alt="post"
          width={185}
          height={208}
          className="min-h-full w-full rounded-xl object-cover md:min-h-[208px] md:w-[185px] md:rounded-l-xl md:rounded-r-none"
        />

        <div className="flex flex-col p-6">
          <Card.Header className="mb-2 p-0">
            <div className="flex gap-2">
              <p className="text-xs">{publishedAt} by</p>
              <p className="text-xs font-bold text-primary">{publishedBy}</p>
            </div>
          </Card.Header>
          <div className="flex flex-col gap-1">
            <Card.Title className="text-2xl font-bold">{title}</Card.Title>
            <Card.Description className="line-clamp-2">
              {description}
            </Card.Description>
          </div>
          <Card.Footer className="mt-6 flex w-full justify-between p-0">
            <Link href="/post/1" className="text-sm font-medium">
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
