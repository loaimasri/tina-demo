import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui";
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
}: ServiceCardProps): JSX.Element {
  return (
    <Card className="pointer-events-none h-[300px] w-[334px] rounded-2xl outline-[#348dcd] hover:outline hover:outline-4 hover:transition-all">
      <CardHeader>
        <div className="flex items-center justify-center gap-4">
          <div
            className="flex aspect-square size-20 items-center justify-center rounded-full p-4"
            style={{ backgroundColor: icon.color }}
          >
            <Image
              src={icon.name}
              alt={icon.name}
              width={40}
              height={40}
              className="m-0 size-10 p-0"
            />
          </div>
          <CardTitle className="text-left text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 text-left text-lg">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <div className="pointer-events-auto flex cursor-pointer items-center justify-center">
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
          <DialogContent className="max-w-[90%] rounded-md sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="mb-2 border-b-2 pb-4">
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
