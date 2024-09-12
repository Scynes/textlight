import { createClient } from '@/utils/supabase/client';
import { create } from 'zustand';
import { AuthSession } from '@/features/auth/types/auth-session';

const SUPABASE = createClient();

const useAuthStore = create<AuthSession>()(set => ({

    user: null,

    loading: true,

    setUser: (user) => set({ user, loading: false }),

    signin: async ( provider ) => {

        await SUPABASE.auth.signInWithOAuth({
            provider: provider,
            options: {
                redirectTo: `http://localhost:3000/auth/callback`,
            },
        });
    },

    signout: async () => {

        const { error } = await SUPABASE.auth.signOut();

        set({ user: null });
    },

    initialize: async () => {
            
        const { data: { user } } = await SUPABASE.auth.getUser();

        console.log(user?.app_metadata)

        set({ user, loading: false });
    }
}));

export default useAuthStore;