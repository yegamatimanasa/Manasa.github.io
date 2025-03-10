import { Anek_Latin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Menu from "@/components/containers/Menu";
import Footer from "@/components/containers/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Drawer } from "vaul";

const anek = Anek_Latin({ subsets: ["latin"] });

export const metadata = {
  title: "Manasa Portfolio",
  description: "I'm a Full Stack Software Engineer👨‍💻 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/manasa.jpg" type="image/jpg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={cn("bg-background", anek.className)}>
        <Menu />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
