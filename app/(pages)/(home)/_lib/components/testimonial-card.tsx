import { Card, CardContent, CardDescription, CardHeader } from "@components/ui";
import Image from "next/image";
import React from "react";

type TestimonialCardProps = {
  avatar: {
    src: string;
    name: string;
    description: string;
  };
  description: string;
};

function TestimonialCard({ avatar, description }: TestimonialCardProps) {
  return (
    <Card className="w-[560px] h-[530px]">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={avatar.src}
            alt={avatar.name}
            className="w-12 h-12"
            width={48}
            height={48}
          />
          <div className="ml-7">
            <h3 className="text-lg font-bold">{avatar.name}</h3>
            <p className="font-light text-muted-foreground">
              {avatar.description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-8">
        <CardDescription className="text-xl">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
