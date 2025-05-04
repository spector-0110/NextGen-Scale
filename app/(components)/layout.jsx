import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "./Header/page";
import  Hero  from "./Hero/page";
import  QuickStats  from "./QuickStats/page";
import  ServiceCards  from "./ServiceCards/page";
import  ProcessTimeLine  from "./ProcessTimeLine/page";
// import  Testimonials  from "./Testimonials/page";
import Footer from "./Footer/page";
import  PartnerMarquee  from "./PartnerMarquee/page";
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
        <Header/>
        <Hero/>
        <QuickStats />
        <PartnerMarquee />
        <ServiceCards />
        <ProcessTimeLine/>
        {/* <Testimonials /> */}
        <Footer />  

        {children}

      </body>
      
    </html>
  );
}
