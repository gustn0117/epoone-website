import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "공지사항", href: "/support/notice" },
  { label: "갤러리", href: "/support/gallery" },
];

const gallery = [
  { src: "/images/epoxy-construction.jpg", title: "에폭시 시공" },
  { src: "/images/epoxy-factory.jpg", title: "괴산공장 전경 (명진화학)" },
  { src: "/images/safety-site.jpg", title: "산업안전관리 현장" },
  { src: "/images/safety-managers.jpg", title: "안전관리 감독" },
  { src: "/images/work-1.png", title: "주차장 에폭시 바닥 시공" },
  { src: "/images/work-2.png", title: "대형 주차장 시공 현장" },
  { src: "/images/building.png", title: "공장 전경" },
  { src: "/images/factory-1.png", title: "생산 설비" },
  { src: "/images/factory-3.png", title: "제조 시설" },
  { src: "/images/warehouse-1.png", title: "원료 보관소" },
  { src: "/images/warehouse-2.png", title: "제품 보관소" },
  { src: "/images/sign.png", title: "에포원 회사 명패" },
];

export default function GalleryPage() {
  return (
    <SubpageLayout
      category="SUPPORT"
      title="고객센터"
      description="에포원의 소식을 전해드립니다"
      tabs={tabs}
      activeTab="/support/gallery"
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-8">갤러리</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
