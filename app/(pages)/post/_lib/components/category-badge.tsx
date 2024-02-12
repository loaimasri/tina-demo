import { Badge } from "@components/ui/badge";
import React from "react";

type CategoryBadgeProps = {
  category: string;
  selected?: boolean;
};

export default function CategoryBadge({
  category,
  selected,
}: CategoryBadgeProps): JSX.Element {
  const [isSelected, setIsSelected] = React.useState(selected);

  const handleSelect = (): void => setIsSelected(!isSelected);

  return (
    <Badge
      variant="secondary"
      className={`cursor-pointer bg-gray-200 px-2 py-[0.375em] text-sm font-normal capitalize hover:bg-primary/95 hover:text-secondary hover:transition-all hover:duration-200  ${
        isSelected &&
        "bg-primary text-primary-foreground hover:bg-gray-200/70 hover:text-primary"
      }`}
      onClick={handleSelect}
    >
      {category}
    </Badge>
  );
}
