'use client';

import { EnvelopeClosedIcon, EyeClosedIcon, EyeOpenIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import { Flex, TextField } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { signUp } from '@/features/auth/actions/signup';
import { toast } from 'react-toastify';
import { AuthModalContent } from '@/features/auth/types/auth-modal-content';
import { motion } from 'framer-motion';
import { INPUT_TRANSITION, INPUT_TRANSITION_CONTAINER } from '@/features/auth/animations/form-transition';

import * as Form from '@radix-ui/react-form';
import { PasswordRequirements } from '@/features/auth/components/password-requirements';
import { SubmitFormButton } from '@/components/shared/submit-form-button';
import { AuthFormWrapper } from '@/features/auth/components/auth-form-wrapper';

interface Properties {
    setContent: (content: AuthModalContent) => void;
}

export const SignUpForm = ( { setContent }: Properties ) => {

    const [ password, setPassword ] = useState<string>('');

    const [ passwordVisible, setPasswordVisible ] = useState<boolean>(false);

    const [ email, setEmail ] = useState<string>('');

    const [ displayName, setDisplayName ] = useState<string>('');

    const [ state, formAction ] = useFormState(signUp, null);

    useEffect(() => {

        if (state?.success) setContent('verify-email');

        else toast.error(state?.message);

    }, [ state?.success, state?.message ]);

    return (
        <AuthFormWrapper>
            <Form.Root action={ formAction }>
                <motion.div variants={ INPUT_TRANSITION_CONTAINER } initial={ 'hidden' } animate={ 'show' }>
                    <Flex direction={ 'column' } gap={ '3' }>
                        <motion.div variants={ INPUT_TRANSITION }>
                            <Form.Field name={ 'display_name' }>
                                <Form.Control asChild>
                                    <TextField.Root type={ 'text' } onChange={ e => setDisplayName(e.target.value) } value={ displayName } placeholder={ 'Display Name' } size={ '3' } autoComplete={ 'off' } required>
                                        <TextField.Slot>
                                            <PersonIcon />
                                        </TextField.Slot>
                                    </TextField.Root>
                                </Form.Control>
                            </Form.Field>
                        </motion.div>
                        <motion.div variants={ INPUT_TRANSITION }>
                        <Form.Field name={ 'email' }>
                            <Form.Control asChild>
                                <TextField.Root type={ 'email' } onChange={ e => setEmail(e.target.value) } value={ email } placeholder={ 'Email' } size={ '3' } required>
                                    <TextField.Slot>
                                        <EnvelopeClosedIcon />
                                    </TextField.Slot>
                                </TextField.Root>
                            </Form.Control>
                        </Form.Field>
                        </motion.div>
                        <motion.div variants={ INPUT_TRANSITION }>
                        <Form.Field name={ 'password' }>
                            <Form.Control asChild className='mb-2'>
                                <TextField.Root type={ `${ passwordVisible ? 'text' : 'password' }` } onChange={ e => setPassword(e.target.value) } value={ password } placeholder={ 'Password' } size={ '3' } required>
                                    <TextField.Slot>
                                        <LockClosedIcon />
                                    </TextField.Slot>
                                    <TextField.Slot side={ 'right' } onClick={ () => setPasswordVisible(!passwordVisible) } className={ 'cursor-pointer select-none' }>
                                        { passwordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
                                    </TextField.Slot>
                                </TextField.Root>
                            </Form.Control>
                            <PasswordRequirements password={ password } />
                        </Form.Field>
                    </motion.div>
                </Flex>
                <Flex className='mt-6'>
                    <SubmitFormButton>Sign Up</SubmitFormButton>
                </Flex>
                </motion.div>
            </Form.Root>
        </AuthFormWrapper>
    );
}