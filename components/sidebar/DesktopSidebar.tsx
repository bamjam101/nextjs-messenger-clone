"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopIcon from "./DesktopIcon";

const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-20 lg:z-40 xl:px-4 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col itmes-center space-y-1">
          {routes?.map((item) => (
            <DesktopIcon
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
