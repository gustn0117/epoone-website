import { NextResponse } from "next/server";
import { supabaseAdmin, BUCKET } from "@/lib/supabase-admin";
import { isAdmin } from "@/lib/auth";

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = (formData.get("description") as string) || null;
  const file = formData.get("file") as File | null;

  if (!title || !file) {
    return NextResponse.json({ error: "제목과 이미지는 필수입니다." }, { status: 400 });
  }

  const ext = file.name.split(".").pop() || "jpg";
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const bytes = Buffer.from(await file.arrayBuffer());

  const { error: uploadError } = await supabaseAdmin.storage
    .from(BUCKET)
    .upload(fileName, bytes, { contentType: file.type, upsert: false });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data: publicUrlData } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(fileName);
  const imageUrl = publicUrlData.publicUrl;

  const { data, error } = await supabaseAdmin
    .from("gallery")
    .insert({ title, description, image_url: imageUrl })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}
