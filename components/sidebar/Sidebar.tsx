import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <aside className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      {children}
    </aside>
  );
};

export default Sidebar;
