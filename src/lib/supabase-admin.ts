import "server-only";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const schema = process.env.NEXT_PUBLIC_SUPABASE_SCHEMA!;

export const supabaseAdmin = createClient(url, serviceKey, {
  db: { schema },
  auth: { persistSession: false, autoRefreshToken: false },
});

export const BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET!;
