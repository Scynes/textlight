'use client'

import { IconButton, Tooltip } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import { FaLink } from "react-icons/fa6";
import { toast } from 'react-toastify';

export const CopyLinkButton = () => {

    const PATH_NAME = usePathname();

    const copyContent = () => {
        navigator.clipboard.writeText(`https://textlight.vercel.app/s/${ PATH_NAME.split('/').pop() }`);
        toast.success('Link copied to clipboard!', { position: 'bottom-right', theme: 'dark' });
    }

    return (
        <>
            <Tooltip content={ 'Copy Content' }>
                <IconButton onClick={ copyContent } variant={ 'soft' } className={ 'transition-all active:scale-95 cursor-pointer' } color={ 'gray' }>
                    <FaLink size={ '1.25rem' }/>
                </IconButton>
            </Tooltip>

        </>
    );
}