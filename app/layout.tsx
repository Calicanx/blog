import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { GoogleAnalytics } from "@next/third-parties/google";

import { PreloadResources } from "./preload";
import Cmdk from "./components/CmdK";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rabinty.vercel.app/"),
  title: {
    default: "Yitzhak Rabin",
    template: "%s | Yitzhak Rabin",
  },
  description:
    "Passionate full stack developer. On the way to master programming",
  openGraph: {
    title: "Yitzhak Rabin",
    description:
      "Passionate full stack developer. On the way to master programming.",
    url: "https://rabinty.vercel.app/",
    siteName: "Yitzhak Rabin's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ogs/ogs-bg.png",
        width: 1200,
        height: 630,
        alt: "Yitzhak Rabin Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Yitzhak Rabin",
    card: "summary_large_image",
    creator: "@0x_Sc0rpi0n",
    creatorId: "@0x_Sc0rpi0n",
    site: "@0x_Sc0rpi0n",
    siteId: "@0x_Sc0rpi0n",
    description:
      "Passionate full stack developer. On the way to master programming.",
    images: ["/ogs/ogs-bg.png"],
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        ></script>
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Cmdk />
          <Navbar />
          {children}
          <Footer />

          <PreloadResources />
        </main>
      </body>
      {process.env.GOOGLE_ANALYTICS_ID &&
        process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
        )}
    </html>
  );
}
