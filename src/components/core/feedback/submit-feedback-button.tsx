'use client';

import { Button } from '@radix-ui/themes'
import { useFormStatus } from 'react-dom'

export const SubmitFeedbackButton = () => {

    const { pending } = useFormStatus();

    return (
        <Button type={ 'submit' } loading={ pending } variant={ 'outline' } className={ 'ml-6 flex-1' }>
            Send
        </Button>
    )
}