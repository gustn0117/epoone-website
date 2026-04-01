import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "인사말", href: "/company/greeting" },
  { label: "연혁", href: "/company/history" },
  { label: "인증서", href: "/company/certificates" },
  { label: "오시는길", href: "/company/location" },
];

export default function LocationPage() {
  return (
    <SubpageLayout
      category="COMPANY"
      title="회사소개"
      description="에포원을 방문해주셔서 감사합니다"
      tabs={tabs}
      activeTab="/company/location"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-300 mb-3">준비중</h2>
          <p className="text-gray-400">오시는길 페이지를 준비하고 있습니다.</p>
        </div>
      </div>
    </SubpageLayout>
  );
}
