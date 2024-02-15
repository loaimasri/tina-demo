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
            className="size-[3rem]"
            width={48}
            height={48}
          />
          <div className="ml-[1.75rem]">
            <h3 className="text-[1.125rem] font-[700]">{avatar.name}</h3>
            <p className="font-[300] text-muted-foreground">{avatar.title}</p>
          </div>
        </div>
      </Card.Header>
      <Card.Content className="mt-[2rem]">
        <Card.Description className="text-[1.25rem] leading-[1.75rem]">
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default TestimonialCard;
