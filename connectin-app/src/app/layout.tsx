"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import BottomNavigation from "../components/layout/BottomNavigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState("ホーム");

  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="flex-1 p-4 md:ml-64 pb-16 md:pb-4">
              {children}
            </main>
          </div>
          <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </body>
    </html>
  );
}