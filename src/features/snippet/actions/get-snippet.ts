'use server';

import { createClient } from '@/utils/supabase/server';
import { Snippet } from '../types/snippet';

export const getSnippet = async (slug: string): Promise<Snippet | null> => {
        
        const SUPABASE = createClient();
        
        const { data, error } = await SUPABASE.from('snippet').select().eq('link_id', slug).single<Snippet>();
        
        return error && null || data;
}