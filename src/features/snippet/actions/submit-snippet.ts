'use server';

import { createClient } from '@/utils/supabase/server';
import { Snippet } from '../types/snippet';

import ShortUniqueId from 'short-unique-id';

export const submitSnippet = async (initialState: any, formData: FormData): Promise< { success: boolean, link: string | null, error?: string } > => {
    
    const { randomUUID } = new ShortUniqueId({ length: 7 });

    // Define the maximum size for the text field (in MB)
    const MAX_TEXT_SIZE_MB = 1;

    // Calculate the maximum size for the text field (in bytes)
    const MAX_TEXT_SIZE_BYTES = MAX_TEXT_SIZE_MB * 1024 * 1024;

    // Get the text from the form data
    const text = formData.get('text')?.toString() || '';

    const expiration = formData.get('expiration') as String;

    const burnAfterReading = formData.get('burn') as String == 'true';

    if (text.length === 0) return { success: false, link: 'error' };

    // Calculate the size of the text in bytes
    const textSizeBytes = new Blob([ text ]).size;

    if (textSizeBytes > MAX_TEXT_SIZE_BYTES) return { success: false, link: null, error: 'Snippet exceeds 1MB limit.' };

    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.from('snippet').insert({ 
        title: formData.get('title'), 
        text: formData.get('text'), 
        link_id: randomUUID(), 
        language: formData.get('language') ,
        burn: burnAfterReading,
        expiration: expiration,
    }).select().single<Snippet>();

    if (error) console.log(error);

    return { success: true, link: data?.link_id || 'error' };
}