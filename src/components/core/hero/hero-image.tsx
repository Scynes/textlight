'use client';

import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const HeroImage = () => {
    
    const theme = useTheme();

    const { mounted } = useMounted();

    return <Image priority src={ `/example-snippet-${ theme.theme == 'dark' || !mounted ? '1' : '3' }.png` } width={ 800 } height={ 400 } alt={ 'Hero' } className='absolute -right-56 z-0 rounded-md'/>
}