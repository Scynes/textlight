'use client';

import * as Form from '@radix-ui/react-form';

import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { Box, Text } from '@radix-ui/themes';
import { signInWithPassword } from '@/features/auth/actions/signin';
import { AuthModalContent } from '@/features/auth/types/auth-modal-content';
import { useFormState } from 'react-dom';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import { SubmitFormButton } from '@/components/shared/submit-form-button';
import { FormInput } from '@/components/shared/form-input';
import { AuthFormWrapper } from '@/features/auth/components/auth-form-wrapper';
import useAuthModalStore from '@/features/auth/stores/use-auth-modal-store';
import AuthContext from '@/context/auth/auth-context';

interface Properties {
    setContent: (content: AuthModalContent) => void;
}

export const SignInForm = ( { setContent }: Properties ) => {

    const [ state, formAction ] = useFormState(signInWithPassword, null);

    const { toggleModal } = useAuthModalStore();

    const { initialize } = useContext(AuthContext);

    useEffect(() => {

        if (state?.success) {
            initialize();
            toggleModal();

            toast.success(state?.message);
        };

    }, [ state?.success ]);

    return (
        <AuthFormWrapper>
            <Form.Root action={ formAction }>
                <Box className='flex flex-col gap-3'>
                    <FormInput name={ 'email' } type={ 'email' } placeholder={ 'Email' } required size={ '3' } icon={ <EnvelopeClosedIcon /> } />
                    <FormInput name={ 'password' } type={ 'password' } placeholder={ 'Password' } required size={ '3' } icon={ <LockClosedIcon /> } />
                </Box>
                <Text size={ '1' }>Forgot password?</Text>
                <Box className='flex gap-6 mt-6'>
                    <SubmitFormButton>Sign In</SubmitFormButton>
                </Box>
            </Form.Root>
        </AuthFormWrapper>
    );
}