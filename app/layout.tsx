import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Company",
  description: "Your company description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        suppressHydrationWarning
        className="min-h-full font-poppins antialiased"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
