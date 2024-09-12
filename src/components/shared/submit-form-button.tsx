'use client';

import { Button } from '@radix-ui/themes';
import { useFormStatus } from 'react-dom';

interface Properties {

    children: React.ReactNode;
}

export const SubmitFormButton = ( { children }: Properties ) => {

    const { pending } = useFormStatus()

    return (
        <Button type={ 'submit' } size={ '3' } className={ 'w-full cursor-pointer' } loading={ pending }>
            { children }
        </Button>
    );
}