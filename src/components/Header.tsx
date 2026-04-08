"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  {
    label: "회사소개",
    href: "/company/greeting",
    sub: [
      { label: "인사말", href: "/company/greeting" },
      { label: "연혁", href: "/company/history" },
      { label: "조직도", href: "/company/organization" },
      { label: "인증서", href: "/company/certificates" },
      { label: "오시는길", href: "/company/location" },
    ],
  },
  {
    label: "사업영역",
    href: "/business",
    sub: [
      { label: "산업안전관리 서비스업", href: "/business#safety" },
      { label: "건축자재 유통업", href: "/business#materials" },
    ],
  },
  {
    label: "제품소개",
    href: "/products/j-epoxy-2000",
    sub: [
      { label: "제이폭시-2000 라이닝", href: "/products/j-epoxy-2000" },
      { label: "제이폭시-1000 하도", href: "/products/j-epoxy-1000" },
    ],
  },
  {
    label: "온라인문의",
    href: "/contact",
    sub: [{ label: "온라인문의", href: "/contact" }],
  },
  {
    label: "고객센터",
    href: "/support/notice",
    sub: [
      { label: "공지사항", href: "/support/notice" },
      { label: "갤러리", href: "/support/gallery" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="EPOONE"
            width={120}
            height={40}
            className="object-contain group-hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <Link
                href={item.href}
                className="relative px-6 py-8 text-base font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
                <span className={`absolute bottom-5 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  hoveredIdx === idx ? "w-6" : "w-0"
                }`} />
              </Link>
              {hoveredIdx === idx && item.sub.length > 0 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl min-w-[220px] py-3 animate-slide-down border border-gray-100">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />
                  {item.sub.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.href}
                      className="relative block px-6 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-1 text-sm">
          <span className="text-gray-300 cursor-default">EN</span>
          <span className="text-gray-300">/</span>
          <span className="text-primary font-semibold cursor-default">KR</span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t animate-slide-down max-h-[70vh] overflow-y-auto">
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-50">
              <Link
                href={item.href}
                className="block px-6 py-3.5 text-sm font-semibold text-gray-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              <div className="bg-gray-50/50">
                {item.sub.map((sub, sIdx) => (
                  <Link
                    key={sIdx}
                    href={sub.href}
                    className="block px-8 py-2.5 text-sm text-gray-500 hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
