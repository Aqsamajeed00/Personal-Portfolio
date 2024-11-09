import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import StairTransition from "@/components/StairTransition"; 
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300","400","500","600","700","800"],
  variable:"--font-jetbrainsMono"
 });

export const metadata = {
  title: "personal portfolio",
  description: "This is my First Personal Portfolio Website",
};

export default function RootLayout({
  children,
})
{
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
        
        </body>
    </html>
  );
}
