"use client";

import * as React from "react";
import { BookOpen, Building, LayoutDashboard, Settings2 } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// This is sample data.
const data = {
  user: {
    name: "Charan",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Studyrooms",
      url: "/studyrooms",
      icon: Building,
    },
    {
      title: "All Sessions",
      url: "/all-sessions",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h1 className="p-2">HSF</h1>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton
          tooltip="Settings"
          asChild
          isActive={pathname == "/settings" ? true : false}
        >
          <Link href="/settings">
            <Settings2 />
            Settings
          </Link>
        </SidebarMenuButton>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
