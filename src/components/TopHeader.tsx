import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import BreadcrumbNav from "./BreadcrumbNav";
import { ModeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between pr-5 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <BreadcrumbNav />
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
