import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import { IoCheckmarkCircle } from "react-icons/io5";

import useAuthModalStore from '@/features/auth/stores/use-auth-modal-store';

export const VerifyEmailDialog = () => {

    const { toggleModal } = useAuthModalStore();

    return (
        <Flex direction={ 'column' } gap={ '4' } justify={ 'center' } align={ 'center' } className={ 'flex-1' }>
            <IoCheckmarkCircle size={ '4rem' } className={ 'text-[--accent-11]' }/>
            <Heading size={ '4' }>
                { "You're all set!" }
            </Heading>
            <Text color={ 'gray' } size={ '1' }>Please check your email to verify your account.</Text>
            <Button size={ '3' } onClick={ () => toggleModal() } className={ 'cursor-pointer w-full' }>Got it!</Button>
        </Flex>
    );
}