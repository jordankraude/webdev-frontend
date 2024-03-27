import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/header.jsx"
import { Footer } from "../components/footer.jsx"
import { SuccessProvider } from "@/components/successContext.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOT Webpages",
  description: "Home page for TOT Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header/>
        <SuccessProvider>
          {children}
        </SuccessProvider>
        <Footer/>
      </body>

    </html>
  );
}
