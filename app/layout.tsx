import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css";


const jetbrains_mono = JetBrains_Mono({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Jaehun Ju's portfolio page",
  description: "Please check my profile thank you.",
};

const HomeLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <html lang="en">
      <body className={jetbrains_mono.className}>
        {children}
      </body>
    </html>
  );
}

export default HomeLayout