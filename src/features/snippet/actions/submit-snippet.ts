'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { Snippet } from '../types/snippet';

import ShortUniqueId from 'short-unique-id';

export const submitSnippet = async (initialState: any, formData: FormData): Promise< { success: boolean, link: string } > => {
    
    const { randomUUID } = new ShortUniqueId({ length: 7 });

    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.from('snippet').insert({ title: formData.get('title'), text: formData.get('text'), link_id: randomUUID(), language: formData.get('language') }).select().single<Snippet>();

    if (error) console.log(error);

    //else redirect(`/s/${ data.link_id }`);

    return { success: true, link: data?.link_id || 'error' };
}