import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "에포원 | EPOONE - 친환경 에폭시 바닥재 전문기업",
  description: "에포원은 친환경 에폭시 바닥재를 전문으로 제조하는 기업입니다. KS인증, 특허 취득 제품으로 안전하고 깨끗한 바닥 환경을 제공합니다.",
  openGraph: {
    title: "에포원 | EPOONE - 친환경 에폭시 바닥재 전문기업",
    description: "KS인증, 특허 취득 친환경 에폭시 바닥재 전문기업 에포원",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "EPOONE" }],
    siteName: "에포원 EPOONE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
