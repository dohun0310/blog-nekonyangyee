import type { Metadata } from "next";

import { Noto_Sans_KR } from "next/font/google";
import ThemeProvider from '../theme/theme';
import GotoTop from '@/Components/GotoTop';
import Footer from '@/Components/Footer';

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: "Neko Blog",
  description: "나만의 작은 일기",
  openGraph: {
    type: "website",
    url: "https://blog-nekonyangyee.vercel.app",
    title: "Neko Blog",
    description: "나만의 작은 일기",
    siteName: "Neko Blog",
    images: [{
      url: "/icons/icon-152x152.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://blog-nekonyangyee.vercel.app",
    title: "Neko Blog",
    description: "나만의 작은 일기",
    images: [{
      url: "/icons/icon-152x152.png",
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <link rel="manifest" href="/manifest.json" />
      <ThemeProvider>
        <body className={noto_sans_kr.className}>
          {children}
          <GotoTop />
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}