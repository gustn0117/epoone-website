import "server-only";
import { cookies } from "next/headers";

const COOKIE_NAME = "epoone_admin";

export async function verifyAdminPassword(password: string): Promise<boolean> {
  return password === process.env.ADMIN_PASSWORD;
}

export async function setAdminCookie() {
  const store = await cookies();
  store.set(COOKIE_NAME, process.env.ADMIN_COOKIE_SECRET!, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === process.env.ADMIN_COOKIE_SECRET;
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
