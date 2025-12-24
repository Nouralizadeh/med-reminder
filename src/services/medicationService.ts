import { supabase } from "@/lib/supabaseClient";

export async function getMedications() {
  const { data, error } = await supabase.from("medications").select("*");

  if (error) throw error;
  return data;
}
