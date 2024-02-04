import React from "react";
import { ThemeProvider } from "./theme-provider";
import { getServerSession } from "next-auth";
import { SessionProvider } from "./session-provider";

export async function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
