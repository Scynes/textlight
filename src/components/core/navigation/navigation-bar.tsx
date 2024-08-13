import { Flex, Heading } from '@radix-ui/themes';
import { IoCodeSlashSharp } from "react-icons/io5";
import { DarkModeToggle } from '../dark-mode-toggle';

export const NavigationBar = () => {

    return (
        <Flex className={ 'transition-all border-b border-[--gray-7] px-4 sm:px-8 py-2' } align={ 'center' } justify={ 'between' }>
            <Flex align={ 'center' } gap={ '1' }>
                <IoCodeSlashSharp size={ '1.5rem' } />
                <Heading size={ '6' }>Textlight</Heading>
            </Flex>
            <DarkModeToggle />
        </Flex>
    );
}