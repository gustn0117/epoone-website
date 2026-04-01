import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "공지사항", href: "/support/notice" },
  { label: "갤러리", href: "/support/gallery" },
];

export default function NoticePage() {
  return (
    <SubpageLayout
      category="SUPPORT"
      title="고객센터"
      description="에포원의 소식을 전해드립니다"
      tabs={tabs}
      activeTab="/support/notice"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-300 mb-3">준비중</h2>
          <p className="text-gray-400">공지사항 페이지를 준비하고 있습니다.</p>
        </div>
      </div>
    </SubpageLayout>
  );
}
