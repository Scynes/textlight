'use server';

import { createClient } from '@/utils/supabase/server';

/**
 * This server action handles signing up a user through the Supabase API. A server action
 * is used here to validate the user's credentials on the server side.
 */
export const signUp = async (previousState: any, formdata: FormData): Promise<{ success: boolean, message: string }> => {

    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.auth.signUp(
        {
            email: formdata.get('email') as string,
            password: formdata.get('password') as string,
            options: {
                data: {
                    display_name: formdata.get('display_name') as string
                }
            }
        }
    );

    console.log(error)

    return { success: !error, message: error ? `Something went wrong. Error: ${ error.code }` : `Account successfully registered!`};
}