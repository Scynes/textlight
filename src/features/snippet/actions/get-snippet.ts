'use server';

import { createClient } from '@/utils/supabase/server';
import { Snippet } from '../types/snippet';
import { hasDateExpired } from '@/utils/date';

export const getSnippet = async (slug: string): Promise<Snippet | null> => {
        
    const SUPABASE = createClient();
    
    const { data, error } = await SUPABASE.from('snippet').select().eq('link_id', slug).single<Snippet>();

    if (data?.burn) {
        await SUPABASE.from('snippet').delete().eq('link_id', slug);
    }

    if (data?.expiration !== '0' && hasDateExpired(data?.created_at || '', parseInt(data?.expiration || '0'))) {
        await SUPABASE.from('snippet').delete().eq('link_id', slug);
        return null;
    }

    return error && null || data;
}