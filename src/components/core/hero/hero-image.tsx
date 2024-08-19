'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export const HeroImage = () => {
    
    const theme = useTheme();

    return (
        <Image src={ theme.theme == 'dark' ? '/example-snippet-1.png' : '/example-snippet-3.png' } width={ 800 } height={ 400 } alt={ 'Hero' } className='absolute -right-56 z-0 rounded-md'/>
    );
}