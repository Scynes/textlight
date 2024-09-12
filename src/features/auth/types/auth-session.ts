import { Provider, User } from '@supabase/supabase-js';

export interface AuthSession {

    // The supabase user object.
    user: User | null;

    // If the user is still loading.
    loading: boolean;

    // Set the user object.
    setUser: (user: User | null) => void;

    // Login with a provider.
    signin: (provider: Provider) => void;

    // Logout the user.
    signout: () => void;

    // Intialize the auth store.
    initialize: () => void;
}