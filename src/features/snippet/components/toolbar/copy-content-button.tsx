'use client'

import { IconButton, Tooltip } from '@radix-ui/themes';
import { RxCopy } from 'react-icons/rx';
import { toast } from 'react-toastify';

export const CopyContentButton = ( { text }: { text: string } ) => {

    const copyContent = () => {
        navigator.clipboard.writeText(text);
        toast.success('Content copied to clipboard!', { position: 'bottom-right', theme: 'dark' });
    }

    return (
        <>
            <Tooltip content={ 'Copy Content' }>
                <IconButton onClick={ copyContent } variant={ 'soft' } className={ 'transition-all active:scale-95 cursor-pointer' } color={ 'gray' }>
                    <RxCopy size={ '1.25rem' }/>
                </IconButton>
            </Tooltip>

        </>
    );
}