'use client';

import { Dialog, Flex, VisuallyHidden, Text } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import { FORM_TRANSITION } from '@/features/auth/animations/form-transition';
import { AuthModalContent } from '@/features/auth/types/auth-modal-content';
import { SignInForm } from '@/features/auth/components/signin-form';
import { SignUpForm } from '@/features/auth/components/signup-form';
import { VerifyEmailDialog } from '@/features/auth/components/verify-email-dialog';
import useAuthModalStore from '@/features/auth/stores/use-auth-modal-store';

export const AuthModal = () => {

    // The modal state and toggle function.
    const { modalOpen, modalContent, setModalContent, toggleModal } = useAuthModalStore();

    // The content to display based on the current display state.
    const CONTENT_DISPLAY: Record<AuthModalContent, React.ReactNode> = {
        'signin': <SignInForm setContent={ setModalContent } />,
        'signup': <SignUpForm setContent={ setModalContent } />,
        'forgot-password': <></>,
        'verify-email': <VerifyEmailDialog />
    }

    return (
        <Dialog.Root open={ modalOpen } onOpenChange={ toggleModal }>
            <Dialog.Content className={ `max-w-md ${ modalContent == 'verify-email' && 'max-w-sm' }` } onOpenAutoFocus={ e => e.preventDefault() } aria-describedby={ undefined }>
                <VisuallyHidden>
                    <Dialog.Title>Authentication Modal for Sign In and Sign Up</Dialog.Title>
                </VisuallyHidden>
                <AnimatePresence mode={ 'wait' }>
                    <motion.div { ...FORM_TRANSITION } key={ modalContent }>
                        { CONTENT_DISPLAY[ modalContent as AuthModalContent ] }
                    </motion.div>
                </AnimatePresence>
                { (modalContent === 'signin' || modalContent === 'signup') &&
                    <Flex wrap={ 'wrap' } justify={ 'center' } gap={ '2' } className={ 'mt-4' }>
                        <Text size={ '2' } color={ 'gray' } className={ 'cursor-pointer hover:scale-110 transition-all' } onClick={() => setModalContent( modalContent === 'signin' ? 'signup' : 'signin' )}>
                            { modalContent === 'signup' ? 'Already have an account?' : "Register a new account."}
                        </Text>
                    </Flex>
                }
            </Dialog.Content>
        </Dialog.Root>
    );
}