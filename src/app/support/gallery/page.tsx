import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";
import { supabase } from "@/lib/supabase";

export const revalidate = 30;

const tabs = [
  { label: "공지사항", href: "/support/notice" },
  { label: "갤러리", href: "/support/gallery" },
];

export default async function GalleryPage() {
  const { data } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  const items = data || [];

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
        {items.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-400">등록된 갤러리 항목이 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">{item.title}</p>
                {item.description && (
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </SubpageLayout>
  );
}
