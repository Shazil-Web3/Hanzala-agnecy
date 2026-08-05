"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function FbqRouter() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [pathname, search?.toString()]);

  return null;
}
