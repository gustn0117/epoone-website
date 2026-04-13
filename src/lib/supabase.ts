import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const schema = process.env.NEXT_PUBLIC_SUPABASE_SCHEMA!;

export const supabase = createClient(url, anonKey, {
  db: { schema },
  auth: { persistSession: false },
});

export const BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET!;
