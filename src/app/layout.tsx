
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/a11y';


const SohneBuch = localFont({
  src: [
    {
      path: './font/Sohne/Sohne-Buch.otf',
      weight: '400',
      style: 'normal',
      
    }
  ],
  variable: "--font-sohne-buch",
})

const BagossTrial = localFont({
  src: [
    {
      path: './font/Bagoss/BagossTRIALVF.ttf',
      weight: '400',
      style: 'normal',
      
    }
  ],
  variable: "--font-bagoss-trial",
})





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juicebox assignment website",
  description: "This website is given to check candidate's ability to design pixel perfect apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.className} 
      ${SohneBuch.variable}
      ${BagossTrial.variable}
      `}>{children}</body>
    </html>
  );
}
