import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "인사말", href: "/company/greeting" },
  { label: "연혁", href: "/company/history" },
  { label: "조직도", href: "/company/organization" },
  { label: "인증서", href: "/company/certificates" },
  { label: "오시는길", href: "/company/location" },
];

export default function OrganizationPage() {
  return (
    <SubpageLayout
      category="COMPANY"
      title="회사소개"
      description="에포원을 방문해주셔서 감사합니다"
      tabs={tabs}
      activeTab="/company/organization"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest mb-3">ORGANIZATION</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">조직도</h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            명확한 타겟, 신속한 실행을 위한
          </h3>
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900">
            투트랙<span className="text-primary">(Two-Track)</span> 조직 구조
          </p>
        </div>

        {/* CEO */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-br from-primary-dark to-primary text-white px-10 py-4 rounded-2xl shadow-lg shadow-primary/20 text-center">
            <p className="text-xs tracking-widest opacity-70 mb-1">CEO</p>
            <p className="text-lg font-bold">대표이사</p>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className="w-[calc(50%-1px)] h-px bg-gray-300" />
            <div className="w-px h-12 bg-gray-300" />
            <div className="w-px h-12 bg-gray-300 -ml-px" />
          </div>
        </div>
        <div className="relative flex justify-center mb-8">
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gray-300" />
          <div className="absolute top-0 left-1/4 w-px h-8 bg-gray-300" />
          <div className="absolute top-0 right-1/4 w-px h-8 bg-gray-300" />
        </div>

        {/* Two Tracks */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Track 1 - 건축자재 사업 */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
            <div className="bg-[#5f7f9a] text-white p-8 md:p-10 text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm tracking-widest opacity-80 mb-2">글로벌 시장 개척</p>
              <h4 className="text-2xl md:text-3xl font-extrabold mb-4">건축자재 사업</h4>
              <div className="w-10 h-px bg-white/30 mx-auto mb-4" />
              <p className="text-sm opacity-80 leading-relaxed">
                해외영업 중심의 인프라 및 자재 수출입
              </p>
            </div>
          </div>

          {/* Track 2 - 인력교육·파견서비스업 */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
            <div className="bg-[#b5634b] text-white p-8 md:p-10 text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm tracking-widest opacity-80 mb-2">국내 B2B 서비스 강화</p>
              <h4 className="text-2xl md:text-3xl font-extrabold mb-4">인력교육·파견서비스업</h4>
              <div className="w-10 h-px bg-white/30 mx-auto mb-4" />
              <p className="text-sm opacity-80 leading-relaxed">
                국내영업 중심의 전문 인력 매칭 및 교육
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="bg-gray-800 text-white rounded-2xl p-8 text-center">
          <p className="text-sm md:text-base leading-relaxed">
            성격이 다른 두 핵심 사업의 <strong>독립성과 전문성</strong>을 극대화하기 위해,<br className="hidden md:inline" />
            불필요한 조직을 소거하고 가장 <strong>직관적인 실행 라인</strong>을 구축합니다.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
