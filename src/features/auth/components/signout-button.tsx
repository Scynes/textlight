'use client'

import { Button } from '@radix-ui/themes';
import useAuthStore from '@/stores/use-auth-store';

export const SignoutButton = () => {

    const { signout } = useAuthStore();

    return (
        <Button onClick={ signout }>Logout</Button>
    );
}