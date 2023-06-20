import Sidebar from "@/components/sidebar/Sidebar";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // @ts-ignore
    <Sidebar>
      <main className="h-full">{children}</main>
    </Sidebar>
  );
};

export default UsersLayout;
