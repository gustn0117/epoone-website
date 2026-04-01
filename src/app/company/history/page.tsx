import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "인사말", href: "/company/greeting" },
  { label: "연혁", href: "/company/history" },
  { label: "인증서", href: "/company/certificates" },
  { label: "오시는길", href: "/company/location" },
];

const history = [
  {
    year: "2025",
    color: "accent",
    events: [
      "07 SK하이닉스 상반기 우수상 (안전보건 협력업체 평가 우수)",
      "03 법인명 변경 (주)에포원",
      "대표자 변경 송득범",
      "에포원(EPOONE) 건설자재 사업 확대",
      "03 에폭시 제조공장 협력(명진화학)",
      "에폭시, 비산먼지 협력사(블루오션에코)",
      "저취용 제이폭시 판매시작",
      "04 강남제비스코(주) 파트너사 등록",
    ],
  },
  {
    year: "2024",
    color: "primary",
    events: [
      "01 대한민국 소비자평가 우수 대상",
      "05 ISO45001, 9001, 14001 인증 (안전보건, 품질경영, 환경경영 시스템)",
      "11 NCS 기업활용 컨설팅 참여 (기업 직무중심의 HRD-HRM)",
    ],
  },
  {
    year: "2023",
    color: "accent",
    events: [
      "10 대한민국 프리미엄 브랜드 대상",
      "12 대한민국 위대한 한국인 100명인 대상",
      "평택상공회의소 중장년내일센터 협약",
    ],
  },
  {
    year: "2022",
    color: "primary",
    events: [
      "02 싱가포르 현대자동차 수주 (수주공사 건설작업 및 안전관리)",
      "03 청년내일채움공제 참여기업",
      "06 SK하이닉스 등록 히터자켓 기능, 디자인 특허 출원",
      "12 한국무역협회 회원 등록",
    ],
  },
  {
    year: "2021",
    color: "accent",
    events: [
      "03 안전관리 데이터 구축 및 관리",
      "04 안전 보건 교육 실시",
      "05 안전보고서 및 개발 진행",
      "06 (주)세이프티에디션 법인 설립 (히터자켓 제조 및 안전인력 양성)",
      "07 삼성전자 DS 등록 (반도체 현장 안전관리 경험 확보)",
      "적십자 응급처치교육 적용 (1단계 안전역량 강화활동)",
      "09 경기도 교육청 선도기업 선정 (기술인력 확보)",
      "10 법정의무교육 및 안전교육, 강사양성, 특성화고 취업반 실습",
    ],
  },
  {
    year: "2020",
    color: "primary",
    events: [
      "03 안전관리 데이터 수집 및 관리 시스템 구축",
    ],
  },
];

const currentProjects = [
  {
    title: "건설자재 사업 확대",
    items: [
      "건설현장 에폭시 및 산업용 바닥재 공급",
      "대형 건설사 프로젝트 자재 공급",
      "해외 건설자재 수출 사업 추진",
      "반도체 및 산업현장 소재 공급 확대",
    ],
  },
  {
    title: "신사업 추진",
    items: [
      "건설자재 유통사업 확대",
      "산업소재 공급망 구축",
      "건설현장 운영 + 자재 통합 서비스 구축",
    ],
  },
  {
    title: "해외 프로젝트",
    items: [
      "미국 조지아 사바나 현대자동차 예정 (Local근로자 파견 및 안전관리)",
      "필리핀 삼성 P6-PROJECT 예정",
    ],
  },
];

export default function HistoryPage() {
  return (
    <SubpageLayout
      category="COMPANY"
      title="회사소개"
      description="에포원을 방문해주셔서 감사합니다"
      tabs={tabs}
      activeTab="/company/history"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest mb-3">HISTORY</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            에포원의 발자취
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-[72px] md:left-[90px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary-light" />

          {history.map((item, i) => (
            <div key={i} className="flex gap-6 md:gap-8 mb-12 last:mb-0">
              <div className="w-[72px] md:w-[90px] flex-shrink-0 text-right pt-1">
                <span className={`text-xl font-extrabold ${
                  item.color === 'accent' ? 'text-accent' : 'text-primary'
                }`}>
                  {item.year}
                </span>
              </div>
              <div className="relative pt-1.5">
                {/* Dot */}
                <div className={`absolute -left-[15px] top-2.5 w-[12px] h-[12px] rounded-full border-[3px] border-white shadow-sm ${
                  item.color === 'accent' ? 'bg-accent' : 'bg-primary'
                }`} />
                <div className={`rounded-2xl p-6 border transition-all hover:shadow-md ${
                  item.color === 'accent'
                    ? 'bg-accent/[0.03] border-accent/10 hover:border-accent/25'
                    : 'bg-primary/[0.03] border-primary/10 hover:border-primary/25'
                }`}>
                  <ul className="space-y-2.5">
                    {item.events.map((event, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          item.color === 'accent' ? 'bg-accent/50' : 'bg-primary/50'
                        }`} />
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Projects */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-xs tracking-widest uppercase">ING</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">현재 진행사업</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentProjects.map((proj, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">0{i + 1}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-4">{proj.title}</h4>
                <ul className="space-y-2.5">
                  {proj.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
