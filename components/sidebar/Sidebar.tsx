import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      {children}
    </aside>
  );
};

export default Sidebar;
