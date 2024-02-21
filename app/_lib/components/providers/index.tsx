import { getServerSession } from "next-auth";
import React from "react";
import { SessionProvider } from "./session-provider";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./tooltip-provider";

export async function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>): Promise<JSX.Element> {
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
