'use server';

import { createClient } from '@/utils/supabase/server';

/**
 * This server aciton handles signing in a user through the Supabase API. A server action
 * is used here to validate the user's credentials on the server side.
 * 
 * @param formdata - The form data containing the user's email and password.
 */
export const signInWithPassword = async (previousState: any, formdata: FormData): Promise<{ success: boolean, message: string }> => {
    
    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.auth.signInWithPassword(
        {
            email: formdata.get('email') as string,
            password: formdata.get('password') as string
        }
    );

    return ( data ) ? { success: true, message: `Welcome back, ${ data.user?.user_metadata.display_name }` } : { success: false, message: error?.message ?? '' };
}