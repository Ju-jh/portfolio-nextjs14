import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css";
import Header from './components/Header';


const jetbrains_mono = JetBrains_Mono({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Jaehun Ju's portfolio page",
  description: "Please check my profile thank you.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={jetbrains_mono.className}>
        <main className="flex min-h-screen flex-col items-center justify-start px-[200px]">
          <Header/>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout