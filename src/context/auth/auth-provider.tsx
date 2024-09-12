'use client';

import { useEffect } from 'react';

import useAuthStore from '@/stores/use-auth-store';
import AuthContext from '@/context/auth/auth-context';

interface Properties {
    
    children: React.ReactNode;
}

const AuthProvider = ( { children }: Properties ) => {

    const { initialize, user, loading } = useAuthStore();

    // Initialize the session and the store.
    useEffect(() => { (async () => initialize())() }, []);

    return (
        <AuthContext.Provider value={ { user, loading, initialize } }>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;