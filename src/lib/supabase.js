import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jcxjoflvqxedvqywrpjp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjeGpvZmx2cXhlZHZxeXdycGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzNTc2MzAsImV4cCI6MjA5OTkzMzYzMH0.JTlH_23RQ8scFEFjtCkNCRLuLOJPZjtQUrXFj5xGqoc';

export const supabase = createClient(supabaseUrl, supabaseKey);
