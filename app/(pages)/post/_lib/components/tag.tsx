import { Badge } from "@components/ui/badge";

type CategoryBadgeProps = {
  tag: string;
  selected?: boolean;
  onClick: (category: string) => void;
};

export default function Tag({
  tag,
  selected,
  onClick,
}: CategoryBadgeProps): JSX.Element {
  const handleSelect = (): void => onClick(tag);

  return (
    <Badge
      variant="secondary"
      className={`cursor-pointer bg-gray-200 px-2 py-[0.375em] text-sm font-normal capitalize hover:bg-primary/95 hover:text-secondary hover:transition-all hover:duration-200  ${
        selected &&
        "bg-primary text-primary-foreground hover:bg-gray-200/70 hover:text-primary"
      }`}
      onClick={handleSelect}
    >
      {tag}
    </Badge>
  );
}
