import { NextResponse } from "next/server";
import { supabaseAdmin, BUCKET } from "@/lib/supabase-admin";
import { isAdmin } from "@/lib/auth";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  const { data: row } = await supabaseAdmin
    .from("gallery")
    .select("image_url")
    .eq("id", id)
    .single();

  if (row?.image_url) {
    const fileName = row.image_url.split("/").pop();
    if (fileName) {
      await supabaseAdmin.storage.from(BUCKET).remove([fileName]);
    }
  }

  const { error } = await supabaseAdmin.from("gallery").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
