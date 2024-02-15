import { Dialog } from "@components/ui/dialog";

import { Card } from "@/app/_lib/components/ui/card";

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
    <Card className="pointer-events-none h-[300px] w-[334px] rounded-[1rem] outline-[#348dcd] hover:outline hover:outline-[4px] hover:transition-all">
      <Card.Header>
        <div className="flex items-center justify-center gap-[1rem]">
          <div
            className="flex aspect-square size-[5rem] items-center justify-center rounded-full p-[1rem]"
            style={{ backgroundColor: icon.color }}
          >
            <Image
              src={icon.name}
              alt={icon.name}
              width={40}
              height={40}
              className="m-[0] size-[2.5rem] p-[0]"
            />
          </div>
          <Card.Title className="text-left text-[1.5rem] leading-[2rem]">
            {title}
          </Card.Title>
        </div>
      </Card.Header>
      <Card.Content>
        <Card.Description className="line-clamp-3 text-left text-[1.125rem]">
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Footer>
        <Dialog>
          <Dialog.Trigger asChild>
            <div className="pointer-events-auto flex cursor-pointer items-center justify-center">
              <span
                style={{
                  color: "#348dcd",
                }}
                className="text-[1.125rem] font-[600] leading-[1.75rem]"
              >
                Learn More
              </span>
              <Image
                className="ml-[0.75rem]"
                src="/arrow-right.svg"
                alt="arrow right"
                width={24}
                height={24}
              />
            </div>
          </Dialog.Trigger>
          <Dialog.Content className="max-w-[90%] rounded-md sm:max-w-[700px]">
            <Dialog.Header>
              <Dialog.Title className="mb-[0.5rem] border-b-[1.5px] pb-[1rem]">
                {title}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Description className="text-[1.125rem] leading-[1.75rem]">
              {description}
            </Dialog.Description>
          </Dialog.Content>
        </Dialog>
      </Card.Footer>
    </Card>
  );
}
