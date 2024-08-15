'use client'

import { IconButton, Tooltip } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { RxCopy } from 'react-icons/rx';
import { toast } from 'react-toastify';

export const CopyButton = ( { text }: { text: string } ) => {

    const { theme } = useTheme();

    const copyContent = () => {
        navigator.clipboard.writeText(text);
        toast('Copied to clipboard', { position: 'bottom-right', theme: 'dark' });
    }

    return (
        <>
            <Tooltip content={ 'Copy Content' }>
                <IconButton onClick={ copyContent } variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                    <RxCopy size={ '1.25rem' }/>
                </IconButton>
            </Tooltip>

        </>
    );
}