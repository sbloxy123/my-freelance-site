import "./globals.css";
import type { Metadata } from "next";
import { Inter, Mulish, Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Bloxy Web Services | Freelance Web Designer & Developer 👨‍💻",
  description:
    "🚀 Supercharge your online presence with incredibly fast websites & apps 🚀 - E-Commerce 🛍️ | Lead Gen 🎯 | Business 🏢 | + more!",
  metadataBase: new URL("https://www.bloxywebservices.co.uk"),
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${inter.className} ${poppins.variable} `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
