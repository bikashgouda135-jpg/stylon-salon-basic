import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const serif = Cormorant_Garamond({subsets:["latin"],variable:"--serif",weight:["400","500","600","700"]}); const sans = Manrope({subsets:["latin"],variable:"--sans"});
export const metadata: Metadata = { title: "Stylon Makeover | Premium Beauty & Makeover Studio", description:"Stylon Makeover — where style, beauty and confidence come together.", metadataBase:new URL("https://www.stylonmakeover.com"), alternates:{canonical:"/"}, openGraph:{title:"Stylon Makeover",description:"Premium Beauty & Makeover Studio",url:"/",type:"website"} };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html> }
