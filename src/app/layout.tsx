import { StackProvider, StackTheme } from "@stackframe/stack";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/nav/nav-bar";
import { stackClientApp } from "../stack/client";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wikimasters",
  description: "Blog application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StackProvider app={stackClientApp}>
          <StackTheme>
            <NavBar />
            {children}
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
