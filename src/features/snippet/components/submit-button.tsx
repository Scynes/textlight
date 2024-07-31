'use client';

import { Button } from '@radix-ui/themes'
import { useFormStatus } from 'react-dom'

export const SubmitButton = ( { children }: { children:  React.ReactNode } ) => {

    const { pending } = useFormStatus();

    return (
        <Button type={ 'submit' } loading={ pending } size={ '3' } variant={ 'surface' } className={ 'cursor-pointer' }>
            { children }
        </Button>
    )
}