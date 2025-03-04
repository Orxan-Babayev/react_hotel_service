import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qcfztbcawrweuzistaaz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjZnp0YmNhd3J3ZXV6aXN0YWF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2NjE1ODUsImV4cCI6MjA1NjIzNzU4NX0.EgGBCmJ5DXMw9AAw2uSKOPRHteWSV30XNyJ-up_mT28";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
