import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaitanya's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>

      <body className={`${inter.className} bg-black-100 overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* 🌐 GLOBAL MESH GRID BACKGROUND */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div
              className="
                h-full w-full
                dark:bg-black-100 bg-white
                dark:bg-grid-white/[0.03]
                bg-grid-black-100/[0.2]
              "
            />
            <div
              className="
                absolute inset-0
                dark:bg-black-100 bg-white
                [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
              "
            />
          </div>

          {/* 📄 PAGE CONTENT */}
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
