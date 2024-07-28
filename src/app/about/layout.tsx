"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  let title = "Why this ministry?"
  if (pathname === "/about/author")
    title = "About the author";
  else if (pathname === "/about/series")
    title = "About the publication series";

  return (
    <div>
      <div className="text-center text-2xl -mt-12 mb-12">{title}</div>
      {children}
    </div>
  );
}
