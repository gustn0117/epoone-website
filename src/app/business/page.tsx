import Image from "next/image";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "산업안전관리 서비스업", href: "/business#safety" },
  { label: "건축자재 유통업", href: "/business#materials" },
];

const safetyItems = [
  { title: "산업안전관리", desc: "산업현장의 안전관리 체계 구축 및 운영, 위험성 평가 및 개선" },
  { title: "안전교육", desc: "법정의무교육, 안전보건교육, 강사양성, 특성화고 취업반 실습" },
  { title: "안전컨설팅", desc: "기업 맞춤형 안전관리 컨설팅 및 안전보건관리체계 수립" },
  { title: "인력공급", desc: "안전관리 전문인력 파견 및 현장 배치 서비스" },
  { title: "반도체 현장 안전관리", desc: "삼성전자, SK하이닉스 등 반도체 현장 전문 안전관리" },
  { title: "건설현장 관리", desc: "건설현장 안전관리 및 프로젝트 관리 서비스" },
  { title: "안전용품 판매", desc: "산업안전 보호구 및 안전용품 유통·판매" },
  { title: "산업안전 연구개발", desc: "안전교육 소프트웨어 개발, 안전용품 R&D" },
  { title: "해외 안전관리", desc: "미국, 싱가포르, 필리핀 등 해외 현장 안전관리 서비스" },
  { title: "프로젝트 관리", desc: "대형 건설·반도체 프로젝트 통합 안전관리" },
];

const materialsItems = [
  { title: "건설자재 도소매", desc: "건설현장에 필요한 각종 자재의 도매 및 소매 유통" },
  { title: "에폭시 바닥재 판매", desc: "제이폭시, 프로아 순에어 등 친환경 에폭시 바닥재 공급" },
  { title: "산업용 도료 판매", desc: "산업현장에 적합한 각종 산업용 도료 공급" },
  { title: "건축마감재 판매", desc: "건축 마감에 필요한 다양한 마감자재 유통" },
  { title: "건설자재 납품", desc: "관공서 및 대형 건설사 프로젝트 자재 납품" },
  { title: "건설현장 자재 공급", desc: "현장 맞춤형 자재 공급 및 물류 서비스" },
  { title: "산업용 코팅재 판매", desc: "바닥재, 방수재, 방식재 등 산업용 코팅 제품 판매" },
  { title: "수출입 무역", desc: "해외 건설자재 수출입 무역 사업" },
  { title: "건설자재 수출", desc: "해외 건설현장 대상 건설자재 수출 사업 추진" },
];

export default function BusinessPage() {
  return (
    <SubpageLayout
      category="BUSINESS"
      title="사업영역"
      description="에포원의 주요 사업 분야를 소개합니다"
      tabs={tabs}
      activeTab="/business"
    >
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-20">
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
            (주)에포원은 <strong className="text-gray-900">산업안전관리 서비스업</strong>과{" "}
            <strong className="text-gray-900">건축자재 유통업</strong> 두 가지 핵심 사업영역을 바탕으로
            고객의 안전과 가치를 실현합니다.
          </p>
        </div>

        {/* ══════ 산업안전관리 서비스업 ══════ */}
        <div id="safety" className="scroll-mt-40 mb-28">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary font-semibold text-xs tracking-widest uppercase">Safety Service</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">산업안전관리 서비스업</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                삼성전자, SK하이닉스 등 국내 대기업 반도체·건설 현장에서
                축적된 안전관리 노하우를 바탕으로, 최고의 안전담당자를 육성하고
                고객 맞춤형 산업안전관리 서비스를 제공합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["삼성전자 DS", "SK하이닉스", "SEMES", "SK실트론"].map((c, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">{c}</span>
                ))}
              </div>
            </div>
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/safety-site.jpg" alt="산업안전관리" fill className="object-cover" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {safetyItems.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-md transition-all duration-300">
                    <span className="text-primary text-xs font-bold group-hover:text-white transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════ 건축자재 유통업 ══════ */}
        <div id="materials" className="scroll-mt-40 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <div className="md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-accent font-semibold text-xs tracking-widest uppercase">Materials Distribution</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">건축자재 유통업</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                친환경 에폭시 바닥재를 비롯한 건설자재의 제조·유통·수출입까지,
                건설현장에 필요한 모든 자재를 원스톱으로 공급합니다.
                명진화학, 강남제비스코(주) 등 국내 주요 제조사와의 파트너십을 통해
                최고 품질의 제품을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["명진화학", "강남제비스코", "블루오션에코"].map((c, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">{c}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4 md:order-1">
              <div className="relative h-[170px] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/epoxy-construction.jpg" alt="에폭시 시공" fill className="object-cover" />
                <div className="absolute bottom-2 left-3 px-2 py-0.5 bg-black/50 rounded text-white text-[10px]">에폭시 시공</div>
              </div>
              <div className="relative h-[170px] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/epoxy-factory.jpg" alt="에폭시 제조 - 명진화학" fill className="object-cover" />
                <div className="absolute bottom-2 left-3 px-2 py-0.5 bg-black/50 rounded text-white text-[10px]">에폭시 제조 - 명진화학</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {materialsItems.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-accent/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:shadow-md transition-all duration-300">
                    <span className="text-accent text-xs font-bold group-hover:text-white transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Companies */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 py-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 tracking-wider uppercase w-full text-center mb-2">관계사</p>
            {[
              { name: "제비스코강남", logo: "/images/logos/jevisco.png" },
              { name: "블루오션에코", logo: "/images/logos/blueocean.png" },
              { name: "(주)명진화학", logo: null },
            ].map((partner, i) => (
              <div key={i} className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center min-w-[140px] h-14">
                {partner.logo ? (
                  <Image src={partner.logo} alt={partner.name} width={120} height={36} className="object-contain max-h-8 w-auto" />
                ) : (
                  <span className="text-sm font-bold text-gray-700">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Products CTA */}
        <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">에폭시 바닥재 제품이 궁금하신가요?</h3>
            <p className="text-white/60 mb-8">제이폭시, 프로아 순에어 등 친환경 에폭시 바닥재 제품을 확인해 보세요.</p>
            <Link
              href="/products/j-epoxy-2000"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              제품 보러가기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
