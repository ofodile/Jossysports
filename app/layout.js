// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Let's talk football",
  description: "Come onboard, let's talk football like never before",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Place the script directly in the <head> using dangerouslySetInnerHTML */}
        <script
          async
          src="https://js.onclckmn.com/static/onclicka.js"
          data-admpid="320671"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-TT7E06GXDL" />
      </body>
    </html>
  );
}
