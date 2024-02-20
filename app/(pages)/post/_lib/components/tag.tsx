import { Badge } from "@components/ui/badge";

type CategoryBadgeProps = {
  tag: string;
  selected?: boolean;
  onClick: (tag: string) => void;
};

export function Tag({
  tag,
  selected,
  onClick,
}: CategoryBadgeProps): JSX.Element {
  const handleSelect = (): void => onClick(tag);

  return (
    <Badge variant={selected ? "primary" : "secondary"} onClick={handleSelect}>
      {tag}
    </Badge>
  );
}
