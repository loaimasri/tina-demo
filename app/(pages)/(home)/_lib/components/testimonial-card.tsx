import { Card } from "@/app/_lib/components/ui/card";
import Image from "next/image";

type TestimonialCardProps = {
  avatar: {
    src: string;
    name: string;
    title: string;
  };
  description: string;
};

function TestimonialCard({
  avatar,
  description,
}: TestimonialCardProps): JSX.Element {
  return (
    <Card className="h-[530px] w-[560px] text-left">
      <Card.Header>
        <div className="flex items-center">
          <Image
            src={avatar.src}
            alt={avatar.name}
            className="size-12"
            width={48}
            height={48}
          />
          <div className="ml-7">
            <h3 className="text-lg font-bold">{avatar.name}</h3>
            <p className="font-light text-muted-foreground">{avatar.title}</p>
          </div>
        </div>
      </Card.Header>
      <Card.Content className="mt-8">
        <Card.Description className="text-xl">{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default TestimonialCard;
