import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
} from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostCardProps = {
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
  publishedBy: string;
};

function PostCard({
  title,
  tags,
  description,
  publishedAt,
  publishedBy,
}: PostCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2 p-0 md:flex-row overflow-hidden">
        <Image
          src="/home-header.png"
          alt="post"
          width={185}
          height={208}
          className="object-cover w-full min-h-full rounded-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none md:rounded-br-none md:min-h-[208px] md:w-[185px]"
        />

        <div className="flex flex-col p-6">
          <CardHeader className="p-0 mb-2">
            <div className="flex gap-2">
              <p className="text-xs">{publishedAt} by</p>
              <p className="text-xs text-primary font-bold">{publishedBy}</p>
            </div>
          </CardHeader>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {description}
            </CardDescription>
          </div>
          <CardFooter className="w-full p-0 flex justify-between mt-6">
            <Link href="/post/1" className="text-sm font-medium">
              Read more...
            </Link>

            <div className="space-x-2 pointer-events-none">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}

export default PostCard;
