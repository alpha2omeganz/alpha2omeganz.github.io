"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Suspense } from "react";
import { NavigationEvents } from "@/components/navigation-events"
import HamburgerNav from "./hamburger-nav";

export default function Header() {
  const pathname = usePathname();
  const maybeApplyActiveStyle = (linkPath: string) =>
    (pathname.includes(linkPath) && linkPath !== "/") ||
    (pathname === linkPath) ? 'text-shadow' : '';

  const isAboutPage = pathname.includes("/about");

  return (
    <div className="flex align-middle">
      <Suspense>
        <NavigationEvents />
      </Suspense>
      <div className="w-36 h-36 relative flex-none md:mt-3 mt-1">
        <Image src="/alpha2omega-logo.png" className="rounded-full border-2 border-black ml-1 md:ml-0" fill={true} alt="Alpha2Omega logo" />
      </div>
      <HamburgerNav />
      <div className="flex-1 md:block hidden">
        <div className="w-120 mt-5 ml-2 text-lg grid grid-cols-15 text-center">
          <div className="col-start-1 col-span-3">
            <Link href="/" className={`${maybeApplyActiveStyle('/')} hover:text-shadow`}>HOME</Link>
          </div>
          <span className="col-start-4">|</span>
          <details id="about-nav-details" className="col-start-5 col-span-3 flex flex-col">
            <summary><span className={`${maybeApplyActiveStyle('/about')} cursor-pointer hover:text-shadow`}>ABOUT</span></summary>
            <Link href="/about/ministry" className="text-sm text-left ml-4 hover:text-shadow">Ministry</Link>
            <Link href="/about/author" className="text-sm text-left ml-4 hover:text-shadow">Author</Link>
            <Link href="/about/series" className="text-sm text-left ml-4 hover:text-shadow">Series</Link>
          </details>
          <span className="col-start-8">|</span>
          <div className="col-start-9 col-span-3">
            <Link href="/catalogue" className={`${maybeApplyActiveStyle('/catalogue')} hover:text-shadow`}>CATALOGUE</Link>
          </div>
          <span className="col-start-12">|</span>
          <div className="col-start-13 col-span-3">
            <Link href="/contact" className={`${maybeApplyActiveStyle('/contact')} hover:text-shadow`}>CONTACT</Link>
          </div>
        </div>
      </div>
      {!isAboutPage && <div className="w-36 h-36 relative flex-none mt-3 md:block hidden">
        <Image src="/alpha6-logo.png" className="rounded-full border-2 border-black" fill={true} alt="Alpha6 logo" />
      </div>}
      {isAboutPage && 
      <div className="md:block hidden">
        <Image src="/peter-at-pinatubo.jpg" className="mt-2" width={300} height={180} alt="Peter Dennis at Pinotubo, 2024" />
        <span className="absolute text-2xs font-bold text-white ml-32 -mt-7">Peter Dennis</span>
        <span className="absolute text-2xs text-white ml-32 -mt-4">Pinatubo, 2024</span>
      </div>}
    </div>
  );
}