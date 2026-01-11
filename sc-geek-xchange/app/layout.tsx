import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import { Orbitron, Roboto, Inter } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// const roboto = Roboto({
//   subsets: ["latin"],
//   variable: "--font-body",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Space Coast Geek XChange",
  description: "Your source for pop culture collector's items and memorabilia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body>
        <header>
          <nav aria-label="Main navigation">
            <Nav />
          </nav>
        </header>
        {children}
        <footer>
          <small>
            &copy; {new Date().getFullYear()} Space Coast Geek XChange
          </small>
        </footer>
      </body>
    </html>
  );
}
