"use client";

import React from "react";
import { CardsList, Header, Sidebar } from "@/components/common";
import { CardProviderContext } from "@/contexts";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex w-full bg-white">
      <Sidebar />

      <div className="h-screen flex flex-col flex-1 ">
        <Header />

        <main className="flex-1 h-[calc(100vh-74px)] overflow-hidden overflow-y-auto">
          <CardProviderContext>
            {children}

            <CardsList />
          </CardProviderContext>
        </main>
      </div>
    </div>
  );
}

export default React.memo(DashboardLayout);
