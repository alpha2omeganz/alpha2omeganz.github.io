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
        lg:bg-white
        lg:bg-[url('../../public/bible-plain-cover-cropped.png')]
        lg:bg-[size:1100px]
        bg-gradient-to-br from-[rgb(210,190,150)] to-[rgb(210,200,170)]
        bg-cover
        bg-top
        bg-no-repeat`}>
        <main className="lg:ml-[calc(50%+25px)] lg:-translate-x-1/2 lg:mt-8 lg:w-[880px] w-screen mb-8">
          <Header />
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
