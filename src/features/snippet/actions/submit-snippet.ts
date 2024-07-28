'use server';

import { createClient } from '@/utils/supabase/server';
import ShortUniqueId from 'short-unique-id';

export const submitSnippet = async (formData: FormData) => {
    
    const { randomUUID } = new ShortUniqueId({ length: 7 });

    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.from('snippet').insert({ text: formData.get('text'), link_id: randomUUID() }).select();

    if (error) {
        console.error(error);
    }

    console.log(data)

}