'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const HeroImage = () => {
    
    const theme = useTheme();

    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return <Image priority src={ `/example-snippet-${ theme.theme == 'dark' || !mounted ? '1' : '3' }.png` } width={ 800 } height={ 400 } alt={ 'Hero' } className='absolute -right-56 z-0 rounded-md'/>
}