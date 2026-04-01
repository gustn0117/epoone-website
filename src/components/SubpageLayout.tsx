"use client";

import Link from "next/link";
import Image from "next/image";

interface SubpageLayoutProps {
  category: string;
  title: string;
  description: string;
  tabs: { label: string; href: string }[];
  activeTab: string;
  children: React.ReactNode;
}

export default function SubpageLayout({
  category,
  title,
  description,
  tabs,
  activeTab,
  children,
}: SubpageLayoutProps) {
  return (
    <div className="pt-20">
      {/* Page Banner */}
      <div className="relative h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/work-2.png"
          alt={title}
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent/50" />
        <div className="absolute inset-0 shimmer" />

        {/* Decorative circles */}
        <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-accent/5 blur-2xl" />

        <div className="relative text-center text-white z-10">
          <p className="text-xs tracking-[0.3em] mb-3 text-white/60 uppercase font-medium">{category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
          <p className="text-sm text-white/50">{description}</p>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-5 rounded-full" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`relative px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.href
                    ? "text-primary"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab.label}
                {activeTab === tab.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">{children}</div>
    </div>
  );
}
