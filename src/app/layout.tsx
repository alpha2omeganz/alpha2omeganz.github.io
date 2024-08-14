import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpha2Omega",
  description: "Resource and information hub for Alpha2Omega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-[100vw] min-h-screen">
      <body className={`${inter.className} 
        md:bg-[url('../../public/bible-plain-cover-cropped.png')]
        md:bg-[size:1100px]
        bg-[url('../../public/bible-texture.png')]
        bg-cover
        bg-top
        bg-no-repeat`}>
        <main className="md:ml-[calc(50%+25px)] md:-translate-x-1/2 md:mt-8 md:w-[880px] w-screen">
          <Header />
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
