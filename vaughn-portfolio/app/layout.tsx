import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaughn Alston | Full-Stack Developer",
  description:
    "Vaughn Alston's portfolio — full-stack development, cloud systems, and useful AI integrations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
