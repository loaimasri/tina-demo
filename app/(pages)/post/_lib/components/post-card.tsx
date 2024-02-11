import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
      <CardContent className="flex gap-2 p-0">
        <Image
          src="/home-header.png"
          alt="post"
          width={185}
          height={208}
          className="object-cover h-52 rounded-tl-xl rounded-bl-xl"
        />

        <div className="flex flex-col p-6">
          <CardHeader className="p-0 mb-2">
            <div className="flex gap-2">
              <p className="text-xs">{publishedAt} by</p>
              <p className="text-xs text-blue-700">{publishedBy}</p>
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

            <div className="space-x-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-xl pointer-events-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}

export default PostCard;
