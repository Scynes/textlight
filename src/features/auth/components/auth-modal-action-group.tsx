'use client';

import { Button, Flex, Text } from '@radix-ui/themes';
import { AuthModalContent } from '@/features/auth/types/auth-modal-content';
import { AuthModal } from '@/features/auth/components/auth-modal';

import useAuthModalStore from '@/features/auth/stores/use-auth-modal-store';

export const AuthModalActionGroup = () => {

    const { setModalContent, toggleModal } = useAuthModalStore();

    // Handle the click event for the buttons to trigger the modal.
    const handleOnClick = (content: AuthModalContent) => {
        
        // Set the content of the modal to render.
        setModalContent(content);

        // Toggle the modal to open.
        toggleModal();
    }

    return (
        <Flex gap={ '2' }>
            <AuthModal />
            <Button onClick={ () => handleOnClick('signup') } size={ '3' } variant={ 'surface' } color={ 'gray' } className={ 'relative cursor-pointer transition-all ease-in-out active:scale-95' }>
                    <Text>Register</Text>
            </Button>
            <Button onClick={ () => handleOnClick('signin') } size={ '3' } variant={ 'surface' } className={ 'cursor-pointer transition-all active:scale-95' }>
                <Text>Sign In</Text>
            </Button>
        </Flex>
    );
}