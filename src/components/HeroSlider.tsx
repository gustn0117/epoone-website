"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  { src: "/images/work-1.png", alt: "에폭시 바닥재 시공 현장" },
  { src: "/images/safety-site.jpg", alt: "산업안전관리 현장" },
  { src: "/images/epoxy-construction.jpg", alt: "에폭시 시공" },
  { src: "/images/safety-managers.jpg", alt: "안전관리 감독" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Slide images */}
      {slides.map((slide, i) => (
        <Image
          key={i}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover scale-105 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            <span className="text-white/80 text-xs tracking-[0.25em] uppercase font-medium">Eco-Friendly Epoxy &amp; Safety Management</span>
          </div>
          <h1 className="text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] font-extrabold text-white leading-[1.25] mb-8 animate-fade-in-up tracking-tight whitespace-nowrap">
            내구성, 내수성이 뛰어난
            <br />
            고기능성 <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-emerald-300">친환경 에폭시 바닥재</span>
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-12 leading-[1.8] animate-fade-in-up opacity-0 delay-200 max-w-xl mx-auto font-light" style={{animationFillMode:'forwards'}}>
            KS인증 및 특허를 보유한 무용제형 친환경 에폭시 바닥재.
            <br />
            냄새 없이 쾌적한 시공, 뛰어난 내구성으로
            <br className="hidden sm:block" />{" "}
            안전한 바닥 환경을 제공합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0 delay-300" style={{animationFillMode:'forwards'}}>
            <Link href="/products/j-epoxy-2000" className="group px-9 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center gap-2 text-[15px]">
              제품 알아보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/contact" className="px-9 py-4 glass-card text-white font-semibold rounded-full hover:bg-white/15 transition-all text-[15px]">
              온라인 문의
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-white" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Hero bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 border-t border-white/10">
            {[
              { label: "KS 인증", value: "F 4937" },
              { label: "특허", value: "10-2025206" },
              { label: "유해물질", value: "검출한계 미만" },
            ].map((s, i) => (
              <div key={i} className="py-6 text-center border-r last:border-r-0 border-white/10">
                <p className="text-white/50 text-xs mb-1">{s.label}</p>
                <p className="text-white font-semibold text-sm">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
