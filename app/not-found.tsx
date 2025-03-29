"use client";

import * as React from "react";
import Link from "next/link";
import { IconGhost, IconHome } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-foreground">
      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 text-center">
        <IconGhost className="w-24 h-24 text-primary" />
        <h2 className="text-3xl font-semibold">404 - Oops, You’re Lost!</h2>
        <p className="text-muted-foreground max-w-md">
          It seems you’ve wandered off the path. The page you’re looking for
          doesn’t exist or has been moved.
        </p>
        <Separator className="my-4 w-16" />
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground px-4 py-2 rounded-md transition duration-200 ease-linear"
        >
          <IconHome className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </Link>
      </main>
    </div>
  );
}
