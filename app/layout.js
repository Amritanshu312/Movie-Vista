import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${process.env.WEBSITE_NAME} || Watch TV Shows Online, Watch Movies Online`,
  description: `Explore thousands of free shows on ${process.env.WEBSITE_NAME}. Enjoy a sleek interface and uncover hidden gems and classic favorites. Relax and unwind with our diverse selection.`,
  keywords: [
    "movie",
    "tv",
    "tv show",
    "watch",
    "watch movie",
    "watch tv",
    "watch tv show",
    "online",
    "online movie",
    "online tv",
    "online tv show",
    "free",
    "Movie Vista",
    "MovieVista",
    "movie vista"
  ],
  authors: [
    {
      name: "MovieVista",
      url: "https://movievista.vercel.app/",
    },
  ],

  other: {
    "X-Robots-Tag": "index, nofollow",
    'google-site-verification': 'ls1OUoOoLjxYsmKMPQ1ML9P99TWDsm7d5hfnGQjW7Tw',
    "X-Frame-Options": "SAMEORIGIN",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/websiteIcon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/websiteIcon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" type="image/x-icon" href="/websiteIcon/favicon.ico" />
        <link rel="apple-touch-icon" href="/websiteIcon/apple-touch-icon.png" />
      </Head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
