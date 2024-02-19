import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${process.env.WEBSITE_NAME} || Watch TV Shows Online, Watch Movies Online`,
  description: `Explore thousands of free shows on ${process.env.WEBSITE_NAME}. Enjoy a sleek interface and uncover hidden gems and classic favorites. Relax and unwind with our diverse selection.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="ls1OUoOoLjxYsmKMPQ1ML9P99TWDsm7d5hfnGQjW7Tw" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
