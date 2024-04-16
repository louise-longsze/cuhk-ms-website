import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "代謝症候群",
  description: "代謝症候群",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <Toaster />
          <Navbar />
          <main className="bg-slate-100">{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
