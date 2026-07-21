import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kevin · 个人网站",
    template: "%s · Kevin",
  },
  description:
    "Kevin 的个人网站，记录作品、人生轨迹、随笔与喜欢的音乐。",
  openGraph: {
    title: "Kevin · 个人网站",
    description:
      "Kevin 的个人网站，记录作品、人生轨迹、随笔与喜欢的音乐。",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
