import SubpageLayout from "@/components/SubpageLayout";
import { supabase } from "@/lib/supabase";
import NoticeList from "./NoticeList";

export const revalidate = 30;

const tabs = [
  { label: "공지사항", href: "/support/notice" },
  { label: "갤러리", href: "/support/gallery" },
];

export default async function NoticePage() {
  const { data } = await supabase
    .from("notices")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <SubpageLayout
      category="SUPPORT"
      title="고객센터"
      description="에포원의 소식을 전해드립니다"
      tabs={tabs}
      activeTab="/support/notice"
    >
      <div className="max-w-4xl mx-auto">
        <NoticeList notices={data || []} />
      </div>
    </SubpageLayout>
  );
}
