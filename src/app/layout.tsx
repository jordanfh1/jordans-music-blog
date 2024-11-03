import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/header";
import React from 'react';


export const metadata: Metadata = {
  title: "Jordan's Music Blog",
  description: "A music blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
