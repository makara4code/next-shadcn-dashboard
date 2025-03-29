"use client"

import { usePathname } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  // Map routes to titles
  const getTitleFromRoute = (path: string) => {
    switch (path) {
      case "/dashboard":
        return "Dashboard"
      case "/lifecycle":
        return "Lifecycle"
      case "/analytics":
        return "Analytics"
      case "/projects":
        return "Projects"
      case "/team":
        return "Team"
      default:
        return "Dashboard" // Fallback title
    }
  }

  const title = getTitleFromRoute(pathname)

  return (
    <header className="flex h-[var(--header-height)] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-base font-medium">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

