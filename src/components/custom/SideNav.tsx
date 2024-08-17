import { BookHeart, Columns2, LayoutDashboard, Package2 } from "lucide-react";

import React from "react";
import Link from "./Link";

const SideNav = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background dark:border-amber-500 dark:bg-gray-950 sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/overview"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          tooltip="Overview"
        >
          <LayoutDashboard className="h-4 w-4 transition-all group-hover:scale-110" />
        </Link>
        <Link
          href="/pantry"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          tooltip="Pantry"
        >
          <Columns2 className="h-4 w-4 transition-all group-hover:scale-110" />
        </Link>
        <Link
          href="/cookbook"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          tooltip="Cookbook"
        >
          <BookHeart className="h-4 w-4 transition-all group-hover:scale-110" />
        </Link>
      </nav>
    </aside>
  );
};

export default SideNav;
