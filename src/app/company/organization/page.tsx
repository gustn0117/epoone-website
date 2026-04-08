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

        {/* ═══════ Section 1: 투트랙 개요 ═══════ */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            명확한 타겟, 신속한 실행을 위한
          </h3>
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900">
            투트랙<span className="text-primary">(Two-Track)</span> 조직 구조
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Track 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="bg-[#5f7f9a] text-white p-8 md:p-10 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs tracking-widest opacity-80 mb-2">글로벌 시장 개척</p>
              <h4 className="text-2xl font-extrabold mb-3">건축자재 사업</h4>
              <div className="w-8 h-px bg-white/30 mx-auto mb-3" />
              <p className="text-sm opacity-80">해외영업 중심의 인프라 및 자재 수출입</p>
            </div>
          </div>
          {/* Track 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="bg-[#b5634b] text-white p-8 md:p-10 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs tracking-widest opacity-80 mb-2">국내 B2B 서비스 강화</p>
              <h4 className="text-2xl font-extrabold mb-3">인력교육·파견서비스업</h4>
              <div className="w-8 h-px bg-white/30 mx-auto mb-3" />
              <p className="text-sm opacity-80">국내영업 중심의 전문 인력 매칭 및 교육</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-2xl p-7 text-center mb-20">
          <p className="text-sm md:text-base leading-relaxed">
            성격이 다른 두 핵심 사업의 <strong>독립성과 전문성</strong>을 극대화하기 위해,<br className="hidden md:inline" />
            불필요한 조직을 소거하고 가장 <strong>직관적인 실행 라인</strong>을 구축합니다.
          </p>
        </div>

        {/* ═══════ Section 2: 상세 조직도 ═══════ */}
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Fast &amp; Lean: 총괄이사 산하 2대 핵심 사업부 수직 보고 체계
          </h3>
        </div>

        {/* Org Chart */}
        <div className="flex flex-col items-center">
          {/* 회장 */}
          <div className="bg-[#1e293b] text-white px-10 py-3 rounded-xl text-center shadow-md">
            <p className="font-bold text-lg">회장</p>
          </div>
          <div className="w-px h-6 bg-gray-300" />

          {/* 대표이사 */}
          <div className="bg-[#1e293b] text-white px-10 py-3 rounded-xl text-center shadow-md">
            <p className="font-bold text-lg">대표이사</p>
          </div>
          <div className="w-px h-6 bg-gray-300" />

          {/* 총괄이사 + 좌우 해외영업부 / 국내영업부 라벨 */}
          <div className="relative w-full flex items-center justify-center mb-0">
            {/* 해외영업부 라벨 (좌측) */}
            <div className="hidden md:flex absolute left-[5%] top-1/2 -translate-y-1/2 flex-col items-center">
              <div className="bg-[#5f7f9a] text-white px-5 py-2.5 rounded-xl text-center shadow-md">
                <p className="font-bold text-sm">해외영업부</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">건축자재 사업 전담</p>
            </div>

            {/* 총괄이사 */}
            <div className="bg-[#1e293b] text-white px-10 py-3 rounded-xl text-center shadow-md">
              <p className="font-bold text-lg">총괄이사</p>
            </div>

            {/* 국내영업부 라벨 (우측) */}
            <div className="hidden md:flex absolute right-[5%] top-1/2 -translate-y-1/2 flex-col items-center">
              <div className="bg-[#b5634b] text-white px-5 py-2.5 rounded-xl text-center shadow-md">
                <p className="font-bold text-sm">국내영업부</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">인력교육,파견서비스 전담</p>
            </div>
          </div>

          {/* 모바일: 해외/국내 라벨 */}
          <div className="flex md:hidden gap-4 mt-4 mb-2">
            <div className="text-center">
              <div className="bg-[#5f7f9a] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm">해외영업부</div>
              <p className="text-[10px] text-gray-500 mt-1">건축자재 사업 전담</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b5634b] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm">국내영업부</div>
              <p className="text-[10px] text-gray-500 mt-1">인력교육,파견서비스 전담</p>
            </div>
          </div>

          {/* Connector: 총괄이사 → 두 갈래 */}
          <div className="w-px h-6 bg-gray-300" />
          <div className="relative w-full max-w-2xl h-8">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gray-300" />
            <div className="absolute top-0 left-1/4 w-px h-full bg-gray-300" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gray-300" />
          </div>

          {/* 두 사업부 하위 직급 */}
          <div className="grid grid-cols-2 gap-x-6 md:gap-x-32 w-full max-w-2xl">
            {/* 해외영업부 라인 */}
            <div className="flex flex-col items-center gap-2">
              {["이사", "부장", "과장", "사원"].map((role, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  <div className="bg-[#5f7f9a] text-white px-6 py-2.5 rounded-xl text-center shadow-sm w-full max-w-[140px]">
                    <p className="font-bold text-sm">{role}</p>
                  </div>
                  {i < 3 && <div className="w-px h-3 bg-gray-300" />}
                </div>
              ))}
            </div>

            {/* 국내영업부 라인 */}
            <div className="flex flex-col items-center gap-2">
              {["국내영업부 이사", "부장", "과장", "사원"].map((role, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  <div className="bg-[#b5634b] text-white px-6 py-2.5 rounded-xl text-center shadow-sm w-full max-w-[160px]">
                    <p className="font-bold text-sm">{role}</p>
                  </div>
                  {i < 3 && <div className="w-px h-3 bg-gray-300" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
