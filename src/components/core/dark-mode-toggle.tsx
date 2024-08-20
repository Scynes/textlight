'use client';

import { useMounted } from '@/hooks/use-mounted';
import { Button } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { RxSun, RxMoon } from "react-icons/rx";

export const DarkModeToggle = () => {

    const theme = useTheme();

    const { mounted } = useMounted();

    const toggleDarkMode = () => theme.setTheme(theme.theme == 'dark' ? 'light' : 'dark');

    return (
        <Button onClick={ toggleDarkMode } className={ 'cursor-pointer transition-all ml-4' } variant={ 'ghost' } color={ 'gray' }>
            { theme.theme == 'dark' || !mounted ? <RxSun size={ '1.25rem' } /> : <RxMoon size={ '1.25rem' } /> }
        </Button>
    );
}