import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const quicksand = Quicksand({
  weight:["300", "400", "500", "600", '700'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Furry Cove",
  description: "Pet's Dream Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ResponsiveNav />
        <main>{children}</main>
        </body>
    </html>
  );
}
