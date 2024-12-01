import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Severity AI - Preorder",
  description: "Your security analysis assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
