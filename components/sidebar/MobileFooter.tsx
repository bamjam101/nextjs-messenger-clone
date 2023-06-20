"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileIcon from "./MobileIcon";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <ul className="fixed justify-between flex items-center w-full bottom-0 lg:hidden bg-white border-t-[3px] z-40">
      {routes.map((item) => (
        <MobileIcon
          key={item.href}
          href={item.href}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </ul>
  );
};

export default MobileFooter;
