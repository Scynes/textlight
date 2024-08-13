'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { Snippet } from '../types/snippet';

import ShortUniqueId from 'short-unique-id';

export const submitSnippet = async (formData: FormData) => {
    
    const { randomUUID } = new ShortUniqueId({ length: 7 });

    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.from('snippet').insert({ title: formData.get('title'), text: formData.get('text'), link_id: randomUUID(), language: formData.get('language') }).select().single<Snippet>();

    if (error) console.log(error);

    else redirect(`/s/${ data.link_id }`);
}