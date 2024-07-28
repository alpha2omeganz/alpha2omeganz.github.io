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
    <html lang="en" className="w-[100vw]">
      <body className={inter.className}>
        <main className="flex ml-[calc(50%+25px)] -translate-x-1/2 mt-8 w-[880px] flex-col">
          <div className="flex-none basis-40">
            <Header />
          </div>
          <div className="grow">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
