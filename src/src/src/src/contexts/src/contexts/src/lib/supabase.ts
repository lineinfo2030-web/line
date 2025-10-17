import { createClient } from '@supabase/Bolt Database-js';

const Bolt DatabaseUrl = import.meta.env.VITE_Bolt Database_URL;
const Bolt DatabaseAnonKey = import.meta.env.VITE_Bolt Database_ANON_KEY;

export const Bolt Database = createClient(Bolt DatabaseUrl, Bolt DatabaseAnonKey);
