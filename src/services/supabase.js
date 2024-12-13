import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database

export const supabaseUrl = 'https://kvbjmhhqvoqwdphfkajd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2YmptaGhxdm9xd2RwaGZrYWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MDAzMzIsImV4cCI6MjA0ODA3NjMzMn0.K7J4n9pmleROFFhIcgapDqbLSVnmDSKCbxmr4oABWK0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
