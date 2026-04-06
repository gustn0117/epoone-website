import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <HeroSlider />

      {/* ═══════════ KEY FEATURES ═══════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary-light" />

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">WHY EPOONE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              에포원이 선택받는 이유
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "KS인증 제품", desc: "KS F 4937 인증 취득으로 검증된 품질의 주차장 바닥용 표면 마감재", color: "primary" },
              { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", title: "친환경 무용제", desc: "무용제형 친환경 제품으로 TVOC, 톨루엔, 폼알데하이드 검출한계 미만", color: "accent" },
              { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 2h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V3L8 2z", title: "특허 기술", desc: "특허 제 10-2025206호 취득, 독자적인 친환경 에폭시 바닥재 조성물", color: "primary" },
              { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: "무취 시공", desc: "냄새가 거의 없어 입주민이 거주 중인 공간에서도 쾌적하게 시공 가능", color: "accent" },
            ].map((item, i) => (
              <div key={i} className="group relative bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 ${
                  item.color === 'accent'
                    ? 'bg-accent/10 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/25'
                    : 'bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25'
                }`}>
                  <svg className={`w-7 h-7 transition-colors duration-300 ${
                    item.color === 'accent' ? 'text-accent group-hover:text-white' : 'text-primary group-hover:text-white'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-2xl" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest mb-3">ABOUT EPOONE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                자연과 사람을 생각하는
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="gradient-text">친환경 에폭시 전문기업</span>
              </h2>
              <div className="space-y-4 mb-10">
                <p className="text-gray-600 leading-relaxed">
                  에포원은 무용제형 친환경 에폭시 바닥재를 개발하여 냄새가 거의 없는 쾌적한 시공 환경을 제공합니다.
                  KS인증과 특허를 취득한 제품으로 고객 여러분께 신뢰할 수 있는 최고의 품질을 보장합니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  자체 공장에서 원료 입고부터 제품 출하까지 엄격한 품질관리 시스템을 통해 최고 품질의 제품을 생산하고 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { num: "KS", label: "F 4937 인증", color: "bg-primary" },
                  { num: "특허", label: "10-2025206", color: "bg-accent" },
                  { num: "자체", label: "공장 생산", color: "bg-primary-light" },
                ].map((stat, i) => (
                  <div key={i} className="relative bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 ${stat.color}`} />
                    <p className="text-xl font-bold text-gray-900">{stat.num}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/company/greeting" className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25">
                회사소개 더보기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="grid grid-cols-12 grid-rows-12 gap-3 h-[520px]">
              <div className="col-span-7 row-span-6 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/building.png" alt="에포원 공장 전경" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-5 row-span-7 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/sign.png" alt="에포원 회사 간판" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-7 row-span-6 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/factory-1.png" alt="에포원 생산 시설" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-5 row-span-5 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/warehouse-1.png" alt="에포원 물류" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ J-EPOXY PRODUCTS ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">PRODUCTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">제이폭시 제품 라인업</h2>
            <p className="text-gray-500">고기능성 친환경 에폭시 바닥용 페인트</p>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                badge: "상도 (라이닝)", badgeColor: "bg-accent",
                name: "제이폭시 - 2000", sub: "(저취) 라이닝 | 무용제형 에폭시 바닥재",
                desc: "에폭시 수지와 변성 폴리아민이 주성분으로 설계된 2액형 상온 경화형 에폭시 라이닝. 1회 도장으로 1mm~3mm까지 시공이 가능하며, 레벨링이 우수하고 광택이 뛰어납니다.",
                features: ["Self-Levelling 우수", "무취형 친환경", "내마모성 우수", "1회 도장 1~3mm"],
                meta: "혼합비 7:1 | Shore D 경도 80 이상",
                href: "/products/j-epoxy-2000", img: "/images/work-2.png",
              },
              {
                badge: "하도 (프라이머)", badgeColor: "bg-primary",
                name: "제이폭시 - 1000", sub: "(저취) 하도 | 저취형 에폭시 바닥재 프라이머",
                desc: "에폭시 수지와 변성 폴리아민이 주성분으로 설계된 2액형 상온 경화형 에폭시 바닥재 하도용 도료. 에탄올 용제만 사용하여 냄새가 순하고 인체에 덜 유해합니다.",
                features: ["우수한 침투력", "에탄올만 사용", "내약품성 우수", "부착성 우수"],
                meta: "혼합비 1:1 | 경화시간 24시간",
                href: "/products/j-epoxy-1000", img: "/images/work-2.png",
              },
            ].map((p, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="relative h-[300px] overflow-hidden">
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 ${p.badgeColor} text-white text-xs font-semibold rounded-full shadow-lg`}>{p.badge}</span>
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{p.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-primary font-medium text-sm mb-3">{p.sub}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{p.meta}</span>
                    <Link href={p.href} className="group/btn inline-flex items-center gap-1 text-sm text-primary font-semibold hover:text-primary-light transition-colors">
                      상세보기
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PDF DOWNLOADS ═══════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">DOWNLOADS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">기술자료 다운로드</h2>
            <p className="text-gray-500">제품 카탈로그 및 TDS를 PDF로 다운로드하세요</p>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/images/logo.png" alt="EPOONE" width={90} height={30} className="object-contain" />
                <span className="text-xs text-gray-400">에포원</span>
              </div>
              <div className="space-y-3">
                {[
                  { href: "/pdf/j-epoxy-2000.pdf", name: "제이폭시-2000 라이닝", sub: "카탈로그 PDF" },
                  { href: "/pdf/j-epoxy-1000.pdf", name: "제이폭시-1000 하도", sub: "카탈로그 PDF" },
                ].map((dl, i) => (
                  <a key={i} href={dl.href} download className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">{dl.name}</p>
                      <p className="text-xs text-gray-400">{dl.sub}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-base font-bold text-gray-700 tracking-wider">JEVISCO</span>
                <span className="text-xs text-gray-400">강남제비스코</span>
              </div>
              <div className="space-y-3">
                {[
                  { href: "/pdf/pure-air-lining-tds.pdf", name: "프로아 순에어 라이닝", sub: "TDS PDF" },
                  { href: "/pdf/pure-air-sealer-tds.pdf", name: "프로아 순에어 실러", sub: "TDS PDF" },
                ].map((dl, i) => (
                  <a key={i} href={dl.href} download className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-accent/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">{dl.name}</p>
                      <p className="text-xs text-gray-400">{dl.sub}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONSTRUCTION PROCESS ═══════════ */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary-light/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent-light font-semibold text-sm tracking-widest mb-3">PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">시공 단면도</h2>
            <p className="text-white/50">체계적인 2단계 시공으로 완벽한 바닥 마감</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "상도", product: "제이폭시-2000 / 프로아 순에어 라이닝", detail: "라이닝 2~3mm | 레키, 흙손 도장", color: "from-accent to-emerald-400" },
              { num: "02", title: "하도", product: "제이폭시-1000 / 프로아 순에어 실러", detail: "프라이머 50μm | 붓, 롤러, 스프레이", color: "from-primary-light to-sky-400" },
              { num: "03", title: "바탕", product: "Cement Mortar", detail: "콘크리트 소지 | 표면처리 후 시공", color: "from-gray-400 to-gray-500" },
            ].map((step, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                  <span className="text-white font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-white/80 font-medium text-sm mb-2">{step.product}</p>
                <p className="text-white/40 text-sm">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CLIENTS ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">CLIENTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">주요 고객사</h2>
            <p className="text-gray-500">국내외 대기업 및 반도체 장비업체와 함께합니다</p>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: "SAMSUNG", logo: "/images/logos/samsung.png" },
              { name: "SEMES", logo: "/images/logos/semes.png" },
              { name: "SK hynix", logo: "/images/logos/skhynix.png" },
              { name: "SK siltron", logo: "/images/logos/sksiltron.png" },
              { name: "제비스코강남", logo: "/images/logos/jevisco.png" },
              { name: "블루오션에코", logo: "/images/logos/blueocean.png" },
              { name: "명진화학", logo: "/images/logos/myungjin.png" },
              { name: "ASM", logo: "/images/logos/asm.png" },
              { name: "WONIK IPS", logo: "/images/logos/wonikips.png" },
              { name: "EBARA", logo: "/images/logos/ebara.png" },
              { name: "KLA", logo: "/images/logos/kla.png" },
              { name: "DEVICE", logo: null },
            ].map((client, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-5 flex items-center justify-center h-20 hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                {client.logo ? (
                  <Image src={client.logo} alt={client.name} width={120} height={40} className="object-contain max-h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                ) : (
                  <span className="text-xs md:text-sm font-bold text-gray-400 tracking-wider text-center">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ APPLICATION AREAS ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">APPLICATION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">적용 분야</h2>
            <p className="text-gray-500">다양한 실내 공간에 적용 가능한 에폭시 바닥재</p>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { name: "지하 주차장", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
              { name: "병원", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { name: "공장", icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
              { name: "연구실", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 2h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V3L8 2z" },
              { name: "사무실", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { name: "식당", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
              { name: "실험실", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
              { name: "방진 바닥", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
            ].map((area, i) => (
              <div key={i} className="group relative bg-gray-50 rounded-2xl p-6 text-center cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-3 transition-all duration-300">
                    <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} />
                    </svg>
                  </div>
                  <p className="font-semibold text-sm text-gray-700 group-hover:text-white transition-colors duration-300">{area.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FACTORY GALLERY ═══════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">FACILITIES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">생산 시설</h2>
            <p className="text-gray-500">자체 공장에서 엄격한 품질관리 하에 생산합니다</p>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/building.png", label: "공장 전경" },
              { src: "/images/factory-1.png", label: "생산 설비" },
              { src: "/images/factory-3.png", label: "제조 시설" },
              { src: "/images/warehouse-2.png", label: "원자재 보관" },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                <Image src={item.src} alt={item.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/support/gallery" className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              갤러리 더보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CERTIFICATIONS ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">CERTIFICATIONS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">인증 및 시험성적</h2>
            <p className="text-gray-500">공인 기관의 엄격한 시험을 통과한 검증된 제품</p>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "KS 제품인증서", desc: "KS F 4937 (제 20-0304호)", detail: "주차장 바닥용 표면 마감재", sub: "한국표준협회 | 2025.11.26", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "특허증", desc: "제 10-2025206호", detail: "친환경 에폭시 바닥재 조성물", sub: "특허청", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 2h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V3L8 2z" },
              { title: "KTR 시험확인서", desc: "오염물질 방출 시험 적합", detail: "TVOC / 톨루엔 / 폼알데하이드 검출한계 미만", sub: "한국화학융합시험연구원 | 유효 2028.02.16", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
            ].map((cert, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cert.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{cert.desc}</p>
                <p className="text-gray-600 text-sm mb-2">{cert.detail}</p>
                <p className="text-gray-400 text-xs">{cert.sub}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/company/certificates" className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors">
              인증현황 더보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/hero-bg.png" alt="배경" fill className="object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 shimmer" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            <span className="text-white/70 text-xs tracking-widest uppercase">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            에폭시 바닥재 시공, 에포원과 함께하세요
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            친환경 에폭시 바닥재에 대해 궁금한 점이 있으시면 언제든 문의해 주세요.<br />
            전문 상담을 통해 최적의 솔루션을 제안해 드리겠습니다.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all hover:shadow-xl hover:shadow-accent/25">
            온라인 문의하기
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
