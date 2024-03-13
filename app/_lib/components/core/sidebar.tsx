"use client";
import { cn } from "@utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon, type IconName } from "../icon";

function SideBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleSidebar = (): void => setIsOpen(!isOpen);

  type SideBarLink = {
    name: string;
    path: string;
    icon: IconName;
  };

  const links: SideBarLink[] = [
    { name: "Home", path: "/", icon: "home" },
    { name: "About", path: "/about", icon: "home" },
    { name: "Contact", path: "/contact", icon: "home" },
  ];

  return (
    <div
      className={cn(
        "flex flex-col items-center bg-surface-invert text-text-secondary gap-[25px] h-full fixed p-[26px] transition-all duration-500 ease-in-out overflow-hidden",
        isOpen ? "w-[300px]" : "w-[72px]",
      )}
    >
      <div className="flex w-full items-center justify-center">
        <span
          className={cn(
            "flex-1 min-w-0 text-h4 font-bold transition-all duration-500 ease-in-out",
            isOpen ? "block" : "hidden",
          )}
        >
          Menu
        </span>
        <div
          className="z-[999] w-[24px] cursor-pointer transition-transform duration-500 ease-in-out"
          onClick={toggleSidebar}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <Icon
            name="doubleArrow"
            className="size-[24px] text-text-secondary opacity-65"
          />
        </div>
      </div>

      <div className="mt-[64px]" />

      {links.map(({ name, path, icon }) => {
        const activeStyles =
          pathname === path
            ? "text-text-secondary"
            : "text-text-secondary opacity-65";

        return (
          <div
            key={name}
            className="flex w-full items-center justify-start gap-[15px] transition-all duration-300 ease-in-out"
          >
            <Link
              href={path}
              className={cn(
                "flex items-center gap-[15px] transition-all duration-500 ease-in-out",
                !isOpen && "justify-center w-full",
                activeStyles,
              )}
            >
              <Icon name={icon} className={cn("size-[24px]", activeStyles)} />
              {isOpen && (
                <span
                  className={cn(
                    "transition-all duration-500 ease-in-out text-title2 font-bold",
                    activeStyles,
                  )}
                >
                  {name}
                </span>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
