import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { isAdmin } from "@/lib/auth";

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { title, content, author } = await request.json();
  if (!title || !content) {
    return NextResponse.json({ error: "제목과 내용은 필수입니다." }, { status: 400 });
  }
  const { data, error } = await supabaseAdmin
    .from("notices")
    .insert({ title, content, author: author || "EPOONE" })
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}
