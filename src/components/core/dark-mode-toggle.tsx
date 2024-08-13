'use client';

import { Box, Button } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { RxSun, RxMoon } from "react-icons/rx";

export const DarkModeToggle = () => {

    const theme = useTheme();

    const toggleDarkMode = () => theme.setTheme(theme.theme == 'dark' ? 'light' : 'dark');

    return (
        <Button onClick={ toggleDarkMode } className={ 'cursor-pointer transition-all' } variant={ 'ghost' } color={ 'gray' }>
            { theme.theme == 'dark' ? <RxSun size={ '1.5rem' } /> : <RxMoon size={ '1.5rem' } /> }
        </Button>
    );
}