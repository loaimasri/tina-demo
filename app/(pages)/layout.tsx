import type { Metadata } from "next";

import { client } from "@/tina/__generated__/databaseClient";

import { cn } from "@utils/cn";
import { fontSans } from "@utils/fonts";
import { Providers } from "@components/providers";
import "@styles/styles.css";
import { Header, Footer } from "../_lib/components/core";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const connection = await client.queries.globalConnection();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col z-10 FTSContainer">
            <Header
              {...connection}
              data={JSON.parse(JSON.stringify(connection.data))}
            />

            <main className="flex-1 h-[var(--section-height)] bg-secondary">
              {children}
            </main>

            <Footer
              {...connection}
              data={JSON.parse(JSON.stringify(connection.data))}
              className="py-8 flex-none"
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
