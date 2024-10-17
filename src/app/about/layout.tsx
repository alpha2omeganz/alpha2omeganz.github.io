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
  else if (pathname === "/about/gospel")
    title = "The Gospel = Good News";  

  return (
    <div className="mx-1">
      <div className="text-center text-2xl md:-mt-12 md:mb-12">{title}</div>
      {children}
    </div>
  );
}
