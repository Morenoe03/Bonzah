import type { Metadata } from "next";
import { Raleway } from "next/font/google";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const raleway = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, Semi-Bold, Bold
});

export const metadata: Metadata = {
  title: "Bonzah Insurance",
  description: "Get a quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased bg-[var(--color-bg)] text-[var(--color-black)]`}
      >
        {children}
      </body>
    </html>
  );
}
