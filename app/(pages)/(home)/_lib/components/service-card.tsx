import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@components/ui";
import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  icon: {
    name: string;
    color: string;
  };
  title: string;
  description: string;
};

export default function ServiceCard({
  description,
  icon,
  title,
}: ServiceCardProps) {
  return (
    <Card className="w-[334px] h-[300px] rounded-2xl outline-[#348dcd] hover:transition-all hover:outline hover:outline-4 pointer-events-none">
      <CardHeader>
        <div className="flex items-center justify-center gap-4">
          <div
            className="rounded-full p-4 h-20 w-20 flex items-center justify-center aspect-square"
            style={{ backgroundColor: icon.color }}
          >
            <Image
              src={icon.name}
              alt={icon.name}
              width={40}
              height={40}
              className="h-10 w-10 m-0 p-0"
            />
          </div>
          <CardTitle className="text-2xl text-left">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg text-left line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex justify-center align-center pointer-events-auto cursor-pointer">
              <span
                style={{
                  color: "#348dcd",
                }}
                className="text-lg font-semibold"
              >
                Learn More
              </span>
              <Image
                className="ml-3"
                src="/arrow-right.svg"
                alt="arrow right"
                width={24}
                height={24}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] max-w-[90%] rounded-md">
            <DialogHeader>
              <DialogTitle className="border-b-2 pb-4 mb-2">
                {title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-lg">
              {description}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
