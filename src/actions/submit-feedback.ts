'use server';

import { createClient } from '@/utils/supabase/server';

export const submitFeedback = async (initialState: any, formData: FormData): Promise<'success' | 'failed'> => {

    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.from('feedback').insert({ message: formData.get('message'), rating: formData.get('rating') }).select().single();

    if (error) return 'failed';

    return 'success';
}