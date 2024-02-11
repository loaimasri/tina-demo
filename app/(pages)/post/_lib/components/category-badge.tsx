import { Badge, Button, badgeVariants } from "@components/ui";
import React from "react";

type CategoryBadgeProps = {
  category: string;
  selected?: boolean;
};

export default function CategoryBadge({
  category,
  selected,
}: CategoryBadgeProps) {
  const [isSelected, setIsSelected] = React.useState(selected);

  const handleSelect = () => setIsSelected(!isSelected);

  return (
    <Badge
      variant="secondary"
      className={`cursor-pointer capitalize bg-gray-200/70 font-normal px-2 py-[0.375em] text-sm hover:bg-primary/95 hover:text-secondary hover:transition-all hover:duration-200  ${
        isSelected &&
        "bg-primary text-primary-foreground hover:text-primary hover:bg-gray-200/70"
      }`}
      onClick={handleSelect}
    >
      {category}
    </Badge>
  );
}
