import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const eduHand = localFont({
  src: "../../Edu_VIC_WA_NT_Hand/EduVICWANTHand-VariableFont_wght.ttf",
  variable: "--font-hand",
  display: "swap",
});

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
    <html lang="zh-CN" className={eduHand.variable}>
      <body className={`${eduHand.className} min-h-screen`}>
        <Sidebar />
        <div className="flex min-h-screen flex-col md:pl-20">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
