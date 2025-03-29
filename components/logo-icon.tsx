"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoIcon() {
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  // Ensure theme-dependent content only renders after mounting
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use a static fallback for SSR, update on client
  const logoSrc =
    isMounted && (resolvedTheme || theme) === "dark"
      ? "/frontend-hub-dark.png"
      : "/frontend-hub-light.png";

  return (
    <Link href="/dashboard">
      <Image
        src={logoSrc} // Static fallback for SSR
        height={100}
        width={100}
        alt="Frontend Hub Logo"
        priority
        className="object-contain"
      />
    </Link>
  );
}
