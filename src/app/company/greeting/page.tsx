import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "인사말", href: "/company/greeting" },
  { label: "연혁", href: "/company/history" },
  { label: "조직도", href: "/company/organization" },
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

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {/* CEO Profile Card */}
          <div className="md:col-span-1">
            <div className="sticky top-36">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image src="/images/ceo.png" alt="송득범 대표" fill className="object-contain bg-gray-50" />
                </div>
                <div className="p-5 text-center">
                  <p className="text-accent font-semibold text-xs tracking-widest mb-1">CEO</p>
                  <p className="text-xl font-bold text-gray-900">송 득 범</p>
                  <p className="text-sm text-gray-500 mt-1">(주)에포원 대표이사</p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md mt-3">
                <Image src="/images/sign.png" alt="에포원 명패" width={1536} height={1024} className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>

          {/* Greeting Text */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 leading-relaxed">
                안녕하십니까.<br />
                에포원 대표 송득범입니다.
              </h3>
              <div className="space-y-4 text-gray-600 leading-[1.85] text-[15px]">
                <p>
                  저는 33년간 서울시 공무원으로 재직하며 기반시설본부장을 끝으로 공직을 마무리하였습니다.
                  공공 현장에서 축적한 경험을 바탕으로 안전과 품질, 그리고 신뢰를 최우선 가치로 삼고 있습니다.
                </p>
                <p>
                  주식회사 에포원은 친환경 저취형 에폭시 사업, 에폭시 제품의 해외 수출,
                  그리고 전문 인력 공급을 함께 수행하는 종합 서비스 기업입니다.
                </p>
                <p>
                  특히 반도체 산업을 비롯한 다양한 산업 현장에 전문 인력을 공급하고 있으며,
                  삼성전자, SK하이닉스 등 주요 반도체 관련 현장에 인력 공급 경험을 바탕으로
                  높은 수준의 업무 이해도와 안정적인 운영 역량을 갖추고 있습니다.
                </p>
                <p>
                  또한, 당사는 국내를 넘어 해외 시장으로의 에폭시 제품 수출을 통해 기술력과 품질을
                  인정받고 있으며, 글로벌 경쟁력을 갖춘 기업으로 성장해 나가고 있습니다.
                </p>
                <p>
                  에포원은 단순한 제품 및 인력 공급을 넘어 현장의 안전과 효율,
                  그리고 신뢰를 책임지는 파트너로서 고객과 함께 성장해 나가겠습니다.
                </p>
                <p>
                  앞으로도 전문성과 책임감을 바탕으로 국내외 시장에서 신뢰받는 기업이 되도록
                  최선을 다하겠습니다.
                </p>
                <p className="font-medium text-gray-700">감사합니다.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                <p className="text-gray-400 text-sm">(주)에포원 대표</p>
                <p className="text-xl font-bold text-gray-900 mt-1">송 득 범</p>
              </div>
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
                ["법인명 변경", "2026.03 (주)에포원으로 변경"],
                ["사업영역", "산업안전관리 서비스업 / 건축자재 유통업"],
                ["인증현황", "KS F 4937 / 특허 제 10-2025206호 / ISO 45001, 9001, 14001 / 관계사 (블루오션에코)"],
                ["주요 고객사", "삼성전자, SK하이닉스, SK실트론, 제비스코강남, 대보건설, 동진피엔아이, 동성공업도장, 보미건설, 카스건설, 정도토건 등"],
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
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "산업안전관리 서비스업",
                desc: "산업안전관리, 안전교육, 안전컨설팅, 인력공급, 반도체·건설현장 안전관리, 안전용품 판매, 산업안전 연구개발, 해외 안전관리, 프로젝트 관리",
                color: "from-primary to-primary-light",
              },
              {
                num: "02",
                title: "건축자재 유통업",
                desc: "건설자재 도소매, 에폭시 바닥재 판매, 산업용 도료 판매, 건축마감재 판매, 건설자재 납품, 건설현장 자재 공급, 산업용 코팅재 판매, 수출입 무역",
                color: "from-accent to-emerald-400",
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
              { year: "2025", amount: "28", unit: "억원" },
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
          <p className="text-xs text-gray-400 text-center mt-4">* 2026년도 진행중</p>
        </div>
      </div>
    </SubpageLayout>
  );
}
