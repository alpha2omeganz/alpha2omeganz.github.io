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
    (pathname === linkPath) ? 'font-semibold' : '';

  const isAboutPage = pathname.includes("/about");
  const isAboutGospelPage = pathname.includes("/about/gospel");
  const isAboutMinistryPage = pathname.includes("/about/ministry");
  const isAboutSeriesPage = pathname.includes("/about/series");
  const isAboutAuthorPage = pathname.includes("/about/author");

  return (
    <div className="flex align-middle">
      <Suspense>
        <NavigationEvents />
      </Suspense>
      <div className="w-36 h-36 relative flex-none lg:mt-3 mt-1">
        <Image src="/alpha2omega-logo.png" className="rounded-full border-2 border-black ml-1 lg:ml-0" fill={true} alt="Alpha2Omega logo" />
      </div>
      <HamburgerNav />
      <div className="flex-1 lg:block hidden">
        <div className="w-[30rem] mt-5 ml-2 text-lg grid grid-cols-[1fr,2px,2fr,2px,2fr,2px,2fr] text-center">
          <div className="col-start-1">
            <Link href="/" className={`${maybeApplyActiveStyle('/')} hover:font-semibold`}>HOME</Link>
          </div>
          <div className="col-start-2">|</div>
          <details id="about-nav-details" className="col-start-3 flex flex-col">
            <summary><span className={`${maybeApplyActiveStyle('/about')} cursor-pointer hover:font-semibold`}>ABOUT</span></summary>
            <div className="text-left text-sm hover:font-semibold"><Link href="/about/gospel">The Gospel</Link></div>
            <div className="text-left text-sm hover:font-semibold"><Link href="/about/ministry">Ministry</Link></div>
            <div className="text-left text-sm hover:font-semibold"><Link href="/about/series">Series</Link></div>
            <div className="text-left text-sm hover:font-semibold"><Link href="/about/author">Author</Link></div>
          </details>
          <div className="col-start-4">|</div>
          <div className="col-start-5">
            <Link href="/catalogue" className={`${maybeApplyActiveStyle('/catalogue')} hover:font-semibold`}>CATALOGUE</Link>
          </div>
          <div className="col-start-6">|</div>
          <div className="col-start-7">
            <Link href="/contact" className={`${maybeApplyActiveStyle('/contact')} hover:font-semibold`}>CONTACT</Link>
          </div>
        </div>
      </div>
      {!isAboutPage && <div className="w-36 h-36 relative flex-none mt-3 lg:block hidden">
        <Image src="/alpha6-logo.png" className="rounded-full border-2 border-black" fill={true} alt="Alpha6 logo" />
      </div>}
      {isAboutAuthorPage && 
      <div className="lg:block hidden">
        <Image src="/peter-at-pinatubo.jpg" className="mt-2" width={300} height={180} alt="Peter Dennis at Pinotubo, 2024" />
        <span className="absolute text-[0.6rem] font-bold text-white ml-32 -mt-7">Peter Dennis</span>
        <span className="absolute text-[0.6rem] text-white ml-32 -mt-4">Pinatubo, 2024</span>
      </div>}
      {(isAboutGospelPage || isAboutSeriesPage) && 
      <div className="lg:block hidden">
        <Image src="/sunset-cropped.jpg" className="mt-2" width={290} height={170} alt="Sunset, Doughboy Bay, Stewart Island" />
      </div>}
      {isAboutMinistryPage && 
      <div className="lg:block hidden">
        <Image src="/creation-experience-genesis.jpg" className="mt-2" width={290} height={170} alt="Creation Experience Genesis" />
      </div>}
    </div>
  );
}