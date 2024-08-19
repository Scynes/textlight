'use server';

import { createClient } from '@/utils/supabase/server';

export const submitFeedback = async (initialState: any, formData: FormData): Promise<'success' | string> => {

    const SUPABASE = createClient();

    const message = formData.get('message') as String;

    if (message.length < 10) return 'Message length too short!'

    const { data, error } = await SUPABASE.from('feedback').insert({ message, rating: formData.get('rating') }).select().single();

    if (error) return 'An error occurred, please try again.';

    return 'success';
}