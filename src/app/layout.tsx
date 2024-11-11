import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="min-h-screen bg-gradient-to-b from-indigo-50 to-white"
          >
       <Navbar />
        {children}
      </body>
    </html>
  );
}
