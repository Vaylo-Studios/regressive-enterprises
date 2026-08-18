import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Regressive Enterprises | Built to Hold Up",
  description:
    "Clearwater's coastal property and marine infrastructure company. Docks, boat lifts, seawalls, and storm-ready waterfront work since 2011. Keeping the standards. Upgrading everything else.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain bg-plum text-ivory">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
