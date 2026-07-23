import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import {
  defaultLocale,
  htmlLang,
  isLocale,
  locales,
  ogLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

const eduHand = localFont({
  src: "../../../Edu_VIC_WA_NT_Hand/EduVICWANTHand-VariableFont_wght.ttf",
  variable: "--font-hand",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dictionary = getDictionary(locale);

  return {
    title: {
      default: dictionary.meta.titleDefault,
      template: dictionary.meta.titleTemplate,
    },
    description: dictionary.meta.description,
    openGraph: {
      title: dictionary.meta.titleDefault,
      description: dictionary.meta.description,
      locale: ogLocale(locale),
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;

  if (!isLocale(raw)) {
    notFound();
  }

  const locale = raw;
  const dictionary = getDictionary(locale);

  return (
    <html lang={htmlLang(locale)} className={eduHand.variable}>
      <body className={`${eduHand.className} min-h-screen`}>
        <Sidebar locale={locale} dictionary={dictionary} />
        <div className="flex min-h-screen flex-col md:pl-20">
          <Header locale={locale} dictionary={dictionary} />
          <main className="flex-1">{children}</main>
          <Footer dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
}
