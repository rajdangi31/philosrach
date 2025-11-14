// /js/supabase-client.js

const SUPABASE_URL = "https://avlvjlcbrnqqjbbomveg.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2bHZqbGNicm5xcWpiYm9tdmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNjUwOTUsImV4cCI6MjA3ODY0MTA5NX0.uZjxsa5ysISDHa0GXXDz8_GdR4aVf5I-VIIiboYIK4g";

if (!window.supabase) {
  console.error("Supabase JS library not loaded. Make sure the CDN script is included before this file.");
} else {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
