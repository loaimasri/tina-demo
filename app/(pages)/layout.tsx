import type { Metadata } from "next";

import { client } from "@/tina/__generated__/databaseClient";

import type { GlobalConnectionQuery } from "@/tina/__generated__/types";
import { Footer, Header } from "@components/core";
import { Providers } from "@components/providers";
import "@styles/styles.css";
import { cn } from "@utils/cn";
import { fontSans } from "@utils/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  const connection = await client.queries.globalConnection();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="FTSContainer z-10 flex min-h-screen flex-col">
            <Header
              {...connection}
              data={
                JSON.parse(
                  JSON.stringify(connection.data),
                ) as GlobalConnectionQuery
              }
            />

            <main className="h-[var(--section-height)] flex-1">{children}</main>

            <Footer
              {...connection}
              data={
                JSON.parse(
                  JSON.stringify(connection.data),
                ) as GlobalConnectionQuery
              }
              className="flex-none py-8"
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
