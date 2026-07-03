import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasportet.com"),
  title: {
    default: "Lucas Portet",
    template: "%s · Lucas Portet",
  },
  authors: [{ name: "Lucas Portet", url: "https://x.com/lukecarry_" }],
  creator: "Lucas Portet",
  twitter: {
    card: "summary_large_image",
    creator: "@lukecarry_",
    title: "Lucas Portet",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0e0e10] text-gray-400 text-xs">
      <body className="max-w-3xl mx-auto px-4 py-32 flex flex-col h-screen">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
