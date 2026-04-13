import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase-admin";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdmin())) {
    redirect("/admin/login");
  }

  const [noticesRes, galleryRes] = await Promise.all([
    supabaseAdmin.from("notices").select("*").order("created_at", { ascending: false }),
    supabaseAdmin.from("gallery").select("*").order("created_at", { ascending: false }),
  ]);

  return (
    <AdminDashboard
      initialNotices={noticesRes.data || []}
      initialGallery={galleryRes.data || []}
    />
  );
}
