-- ==============================================================================
-- THAKSAAI SUPABASE SECURITY SCRIPT (DYNAMIC ENABLER)
-- Purpose: Enables Row Level Security (RLS) across ALL tables dynamically
-- to block unauthorized direct public access. The backend Node.js server 
-- uses the Service Role Key, so it bypasses RLS securely.
-- ==============================================================================

-- 1. Dynamically enable RLS on ALL tables in the public schema
DO $$ 
DECLARE 
  t text;
BEGIN
  FOR t IN 
    SELECT tablename 
    FROM pg_tables 
    WHERE schemaname = 'public'
  LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', t);
  END LOOP;
END $$;

-- 2. Storage Policies
-- Note: Row Level Security is already enabled on storage.objects by Supabase by default.
-- If you need to allow public reads for images, do it via the Supabase Dashboard:
-- Go to Storage -> Policies -> New Policy -> Allow SELECT for your 'media' bucket.
