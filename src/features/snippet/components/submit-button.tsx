'use client';

import { Button } from '@radix-ui/themes'
import { useFormStatus } from 'react-dom'

export const SubmitButton = ( { children }: { children:  React.ReactNode } ) => {

    const { pending } = useFormStatus();

    return (
        <Button type={ 'submit' } loading={ pending } size={ '3' } variant={ 'outline' } className={ '!transition-all sm:flex-1 !cursor-pointer' }>
            { children }
        </Button>
    )
}