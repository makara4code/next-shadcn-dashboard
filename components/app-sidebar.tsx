"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { sidebarData } from "@/lib/constants/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Ensure theme-dependent content only renders after mounting
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Track route changes and simulate loading
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Use a static fallback for SSR, update on client
  const logoSrc =
    isMounted && (resolvedTheme || theme) === "dark"
      ? "/frontend-hub-dark.png"
      : "/frontend-hub-light.png";

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
            <Link href="/dashboard">
              <Image
                src={isMounted ? logoSrc : "/frontend-hub-light.png"} // Static fallback for SSR
                height={100}
                width={100}
                alt="Frontend Hub Logo"
                priority
                className="object-contain"
              />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} isLoading={isLoading} />
        <NavDocuments items={sidebarData.documents} />
        <NavSecondary items={sidebarData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
