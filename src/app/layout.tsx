import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionInViewContextProvider } from "@/lib/ContextWrapper";
import { Toaster } from "sonner";

// const onest = Onest({ subsets: ["latin"], display: "swap" });
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Remote Medical Care",
  description:
    " Join the future of health care with Remote Medical Care—bridging gaps, empowering patients,and connecting professionals worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={inter.style}>
        <SectionInViewContextProvider>
          <Navbar />
          <main className={`lg:mt-20 mt-28`}>{children}</main>
          <Footer />
          <Toaster
            closeButton={true}
            richColors={true}
            position="bottom-center"
          />
        </SectionInViewContextProvider>
      </body>
    </html>
  );
}
