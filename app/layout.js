// app/(component)/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextGen Scale",
  description: "Its the website for NextGen Scale",
};

export default function ComponentLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-background-dark`} 
      >
        <Header>
          {children}
         </Header> 
        <Footer />  
      </body>
    </html>
  );
}