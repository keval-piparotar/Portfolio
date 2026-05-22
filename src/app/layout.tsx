import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import NavigationDock from "@/components/NavigationDock";
import BackgroundGrid from "@/components/BackgroundGrid";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: "Keval Piparotar | AI/ML Developer & Frontend Engineer",
  description: "Portfolio of Keval Piparotar - AI Engineer, Creative Developer, Product Builder. Experience the KEVAL OS.",
  keywords: ["AI Engineer", "Next.js", "Machine Learning", "Frontend Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-keval-bg1 text-white`}>
        <BackgroundGrid />
        <CustomCursor />
        <NavigationDock />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
