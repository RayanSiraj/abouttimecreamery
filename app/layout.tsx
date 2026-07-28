import type { Metadata } from "next";
import {
  Alegreya_Sans,
  Barlow_Condensed,
  Bowlby_One,
  Caveat,
} from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const display = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Alegreya_Sans({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
});

const utility = Barlow_Condensed({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-utility",
});

const script = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: {
    default: "About Time Creamery + The Stuffed Potato Truck",
    template: "%s | About Time Creamery + The Stuffed Potato Truck",
  },
  description:
    "Two crave-worthy concepts. One unforgettable food truck experience. Serving Jacksonville and St Augustine, Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${utility.variable} ${script.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
