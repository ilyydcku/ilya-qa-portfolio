import "./globals.css";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const sans = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin", "cyrillic"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata = {
  title: "Ilya Moshkov — QA",
  description: "QA Engineer / Software Tester portfolio and CV.",
  openGraph: {
    title: "Ilya Moshkov — QA",
    description: "QA Engineer / Software Tester portfolio and CV.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
