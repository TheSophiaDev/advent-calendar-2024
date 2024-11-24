import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/custom-components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adventskalender",
  description: "Adventskalender",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-green-700 h-full min-h-screen w-full">
         <Navbar />
         <div className="flex flex-wrap justify-center gap-8 p-10">
           {children}
         </div>
        </main>
      </body>
    </html>
  );
}
