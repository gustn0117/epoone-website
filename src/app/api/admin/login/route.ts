import { NextResponse } from "next/server";
import { verifyAdminPassword, setAdminCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const { password } = await request.json();
  if (!(await verifyAdminPassword(password))) {
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  }
  await setAdminCookie();
  return NextResponse.json({ success: true });
}
