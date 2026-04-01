import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "인사말", href: "/company/greeting" },
  { label: "연혁", href: "/company/history" },
  { label: "인증서", href: "/company/certificates" },
  { label: "오시는길", href: "/company/location" },
];

export default function GreetingPage() {
  return (
    <SubpageLayout
      category="COMPANY"
      title="회사소개"
      description="에포원을 방문해주셔서 감사합니다"
      tabs={tabs}
      activeTab="/company/greeting"
    >
      <div className="max-w-5xl mx-auto">
        {/* CEO Message */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest mb-3">CEO&apos;S MESSAGE</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            고객의 안전과 행복을 최우선 가치로 여기는 기업
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-5 gap-10 mb-20">
          <div className="md:col-span-3">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 leading-relaxed">
                안녕하십니까?<br />
                (주)에포원에 오신 것을 진심으로 환영합니다.
              </h3>
              <div className="space-y-4 text-gray-600 leading-[1.85] text-[15px]">
                <p>
                  (주)에포원은 변화와 혁신을 통한 성장 동력을 모색하고, 고객의 안전을 소중히 여기며
                  미래를 가치 있게 만드는 방법을 실천합니다.
                </p>
                <p>
                  삼성 반도체 19년 근무 경력의 노하우와 대표 자신이 직접 발로 뛰며
                  현장의 문제점을 바로 잡으려는 목심으로 직원들의 믿음과 신뢰를 얻고
                  성장하고 있는 기업입니다.
                </p>
                <p>
                  최고의 기업으로 최고의 안전담당자를 육성하여 언제 어디서나 고객님의
                  안전을 지키겠습니다.
                </p>
                <p>
                  또한 친환경 에폭시 바닥재 전문기업으로서, 무용제형 에폭시 바닥재를 개발하여
                  냄새가 거의 없는 쾌적한 시공 환경을 제공하고 있으며, KS인증과 특허를 취득한
                  제품으로 고객 여러분께 신뢰할 수 있는 최고의 품질을 보장합니다.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                <p className="text-gray-400 text-sm">(주)에포원 대표</p>
                <p className="text-xl font-bold text-gray-900 mt-1">송 득 범</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="relative flex-1 min-h-[200px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/building.png" alt="에포원 공장" fill className="object-cover" />
            </div>
            <div className="relative flex-1 min-h-[200px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/sign.png" alt="에포원 간판" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Brand Value */}
        <div className="bg-primary-dark rounded-2xl p-10 md:p-14 text-center mb-20 relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative z-10">
            <p className="text-accent-light font-semibold text-sm tracking-widest mb-3">BRAND VALUE</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">참다운 고객 감동</h3>
            <div className="max-w-xl mx-auto space-y-3 text-white/70 text-sm leading-relaxed">
              <p>안전한 환경을 조성하고, 핵심 경험을 바탕으로</p>
              <p>임사에 전문인력을 투입하겠습니다.</p>
              <p>최상의 안전 확보를 위해 진심으로 고객의 입장에서</p>
              <p>소통하고 모든 사람이 공감하고 지킬 수 있는</p>
              <p>효율적 관리시스템을 통해 안전한 공간이</p>
              <p>행복을 더한 참다운 고객 감동을 실현하겠습니다.</p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">OVERVIEW</p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">회사개요</h3>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <table className="w-full border-t-2 border-primary">
            <tbody>
              {[
                ["회사명", "(주)에포원 / EPOONE Co., Ltd."],
                ["대표이사", "송득범"],
                ["전신", "(주)세이프티에디션 (2021.06 설립)"],
                ["법인명 변경", "2025.03 (주)에포원으로 변경"],
                ["사업영역", "친환경 에폭시 바닥재 제조 및 시공 / 건설자재 유통 / 산업안전관리"],
                ["인증현황", "KS F 4937 / 특허 제 10-2025206호 / ISO 45001, 9001, 14001"],
                ["주요 고객사", "삼성전자, SEMES, SK하이닉스, SK실트론, 현대자동차, 현대모비스 등"],
              ].map(([key, val], i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-5 bg-gray-50 font-semibold text-gray-700 w-[140px] text-sm">
                    {key}
                  </td>
                  <td className="py-4 px-5 text-gray-600 text-sm">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Business Areas */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">BUSINESS</p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">사업 분야</h3>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "친환경 에폭시 바닥재",
                desc: "무용제형 친환경 에폭시 바닥재 제조 및 시공. KS인증, 특허 제품으로 주차장, 병원, 공장 등 실내 바닥에 적용.",
                color: "from-primary to-primary-light",
              },
              {
                num: "02",
                title: "건설자재 유통",
                desc: "건설현장 에폭시 및 산업용 바닥재 공급, 대형 건설사 프로젝트 자재 공급, 해외 건설자재 수출 사업 추진.",
                color: "from-accent to-emerald-400",
              },
              {
                num: "03",
                title: "산업안전관리",
                desc: "국내외 산업안전 관리 서비스, 안전교육 소프트웨어 개발, 안전용품 개발 연구소, 안전 체험 교육장 운영.",
                color: "from-primary-light to-sky-400",
              },
            ].map((area, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white font-bold text-sm">{area.num}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-3">{area.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue */}
        <div>
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">REVENUE</p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">매출 현황</h3>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { year: "2022", amount: "30", unit: "억원" },
              { year: "2023", amount: "35", unit: "억원" },
              { year: "2024", amount: "26", unit: "억원" },
              { year: "2025", amount: "38", unit: "억원 (예상)" },
            ].map((rev, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 text-center border transition-all hover:shadow-lg ${
                  i === 3
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-gray-100"
                }`}
              >
                <p className={`text-sm font-medium mb-2 ${i === 3 ? "text-white/70" : "text-gray-400"}`}>
                  {rev.year}
                </p>
                <p className={`text-3xl font-extrabold ${i === 3 ? "text-white" : "text-gray-900"}`}>
                  {rev.amount}
                </p>
                <p className={`text-xs mt-1 ${i === 3 ? "text-white/60" : "text-gray-400"}`}>
                  {rev.unit}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">* 2026년 예상매출 38억원 이상 목표</p>
        </div>
      </div>
    </SubpageLayout>
  );
}
