import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header/page";
import  Hero  from "./(components)/Hero/page";
import  QuickStats  from "./(components)/QuickStats/page";
import  ServiceCards  from "./(components)/ServiceCards/page";
import  ProcessTimeLine  from "./(components)/ProcessTimeLine/page";
// import  Testimonials  from "./components/Testimonials/page";
import Footer from "./(components)/Footer/page";
import  PartnerMarquee  from "./(components)/PartnerMarquee/page";
import ComponentLayout from "./(components)/layout";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-background-dark`} 
      >
        
        <ComponentLayout />
        {children}

      </body>
      
    </html>
  );
}
