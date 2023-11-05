import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUSEUMVERSE",
  description: "Next JS using tailwind, typescript and redux toolkit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#E1E1E1]"}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
