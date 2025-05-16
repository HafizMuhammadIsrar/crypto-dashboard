"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavProjectsProps } from "@/types/coin";

export function NavProjects({ projects }: NavProjectsProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Home</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => {
          // Check if the current path starts with the item URL
          // This makes it active for both exact matches and nested routes
          const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`);

          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton isActive={isActive} asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}