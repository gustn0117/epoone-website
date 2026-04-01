import Image from "next/image";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

const tabs = [{ label: "사업영역", href: "/business" }];

const areas = [
  {
    title: "제이폭시-2000 (저취) 라이닝",
    subtitle: "무용제 에폭시 바닥재용 페인트 · 상도",
    desc: "에폭시 수지와 변성 폴리아민이 주성분으로 설계된 2액형 상온 경화형 에폭시 라이닝입니다. 무용제형 친환경 제품으로, 1회 도장으로 1mm~3mm까지 시공이 가능하며 레벨링이 우수하고 경화 후 광택이 뛰어납니다.",
    features: ["Self-Levelling 우수", "아민브러싱 없음", "무취형 친환경", "내마모성·내충격성 우수"],
    img: "/images/work-1.png",
    href: "/products/j-epoxy-2000",
  },
  {
    title: "제이폭시-1000 (저취) 하도",
    subtitle: "저취형 에폭시 바닥재 하도용 프라이머",
    desc: "에폭시 수지와 변성 폴리아민이 주성분으로 설계된 2액형 상온 경화형 에폭시 바닥재 하도용 도료입니다. 에탄올 용제만 사용하여 콘크리트 및 시멘트 바닥면에 침투력 및 부착성이 우수하고 상도와의 층간 부착력이 뛰어납니다.",
    features: ["우수한 침투력·부착성", "에탄올만 사용", "재도장 하도 가능", "내약품성·내수성 우수"],
    img: "/images/work-2.png",
    href: "/products/j-epoxy-1000",
  },
  {
    title: "프로아 순에어 라이닝",
    subtitle: "D886 · 저취형 무용제계 에폭시 바닥재 · JEVISCO",
    desc: "저취성 원료를 주성분으로 한 무용제형 에폭시계 2액형 도료로써 시공 시 발생하는 냄새를 최소화하였으며 내충격성, 내마모성 및 내구성 등의 기계적 물성이 우수하고 1회 도장으로 후막도장이 가능하고 자체 평활성(Self-Levelling) 및 광택이 우수합니다.",
    features: ["Self-Levelling 우수", "고형분 약 98%", "가사시간 1시간", "혼합비 7:1"],
    img: "/images/factory-1.png",
    href: "/products/pure-air-lining",
  },
  {
    title: "프로아 순에어 실러",
    subtitle: "D887 · 저취형 용제계 에폭시용 바닥재 하도 · JEVISCO",
    desc: "저취성 원료를 주성분으로 한 용제형 에폭시계 2액형 하도 도료로써 시공 시 냄새를 최소화 하였으며 소지와의 부착성이 우수하고 콘크리트 및 시멘트몰탈 소재에 깊이 침투하여 조립자를 고착화시키고 상도와의 층간 부착력을 향상시킵니다.",
    features: ["우수한 침투력", "소지 부착성 우수", "가사시간 90분", "혼합비 1:1"],
    img: "/images/factory-3.png",
    href: "/products/pure-air-sealer",
  },
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
      <div className="space-y-20">
        {areas.map((area, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <p className="text-accent font-medium text-sm mb-1">{area.subtitle}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{area.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {area.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
              <Link
                href={area.href}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm rounded-full hover:bg-primary-light transition-colors"
              >
                제품 상세보기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className={`relative h-[350px] rounded-2xl overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <Image
                src={area.img}
                alt={area.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </SubpageLayout>
  );
}
