// pages/ContactPage.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Separator from "../components/separator";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Yitzhak Rabin via email or schedule a meet.",
  openGraph: {
    title: "Contact Yitzhak Rabin",
    description:
      "Find and connect with Yitzhak Rabin via email or book a meeting.",
    url: "https://rabin.work/contact",
    siteName: "Rabin's Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Yitzhak Rabin",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Yitzhak Rabin",
    description: "Connect with Yitzhak Rabin via email or schedule a meet.",
    images: ["/logo.png"],
    creator: "@0x_Sc0rpi0n",
    creatorId: "@0x_Sc0rpi0n",
    site: "@0x_Sc0rpi0n",
    siteId: "@0x_Sc0rpi0n",
  },
};

export default function ContactPage() {
  return (
    <section>
      <h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
        Contact 📧
      </h1>

      {/* Email Contact */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>Feel free to reach out to me via email:</p>
        <div className="flex items-center mb-4">
          <EnvelopeSimple size={24} />
          <a
            href="mailto:work@rabin.work"
            className="underline text-sm ml-1"
          >
            work@rabin.work
          </a>
        </div>

        <Separator />

        {/* Meeting Schedule Option */}
        <h2 className="font-medium text-2xl mb-6 tracking-tight font-['monospace']">
          Want to chat? Schedule a 1:1 with me!
        </h2>
        <div>
          <a
            href="https://calendly.com/rbnchris0/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm"
          >
            Schedule a meet
          </a>
        </div>
      </div>
    </section>
  );
}
