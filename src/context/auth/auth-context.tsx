import { User } from '@supabase/supabase-js';
import { createContext } from 'react';

/**
 * The AuthContextValues interface defines the shape of the AuthContext.
 */
interface AuthContextValues {

    // The user's authentication state.
    user: User | null;

    // A boolean value indicating whether the user's authentication state is being loaded.
    loading: boolean;

    // A function used to initialize the user's authentication state.
    initialize: () => void;
}

/**
 * The AuthContext is used to provide the user's authentication state to the application.
 */
const AuthContext = createContext<AuthContextValues>({ user: null, loading: true, initialize: () => {} });

export default AuthContext;