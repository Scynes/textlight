import { Box, Flex, Heading } from '@radix-ui/themes';
import { IoCodeSlashSharp } from "react-icons/io5";

export const NavigationBar = () => {
    return (
        <Flex className={ 'border-b border-[--gray-7] px-4 sm:px-8 py-2' } align={ 'center' }>
            <Flex align={ 'center' } gap={ '1' }>
                <IoCodeSlashSharp size={ '1.5rem' } />
                <Heading size={ '6' }>Textlight</Heading>
            </Flex>
        </Flex>
    );
}