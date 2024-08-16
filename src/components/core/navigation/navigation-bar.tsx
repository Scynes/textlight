import { Flex, Heading, Button, Link as RadixLink } from '@radix-ui/themes';
import { IoCodeSlashSharp } from "react-icons/io5";
import { DarkModeToggle } from '../dark-mode-toggle';
import { Feedback } from '../feedback/feedback';
import { FeedbackButton } from '../feedback/feedback-button';
import { IoAdd } from "react-icons/io5";

export const NavigationBar = () => {

    return (
        <Flex className={ 'transition-all border-b border-[--gray-7] px-4 sm:px-8 py-4' } align={ 'center' } justify={ 'between' }>
            <Flex align={ 'center' } gap={ '1' }>
                <IoCodeSlashSharp size={ '1.5rem' } />
                <Heading size={ '6' }>Textlight</Heading>
            </Flex>
            <Flex gap={ '4' } align={ 'center' }>
                <Feedback>
                    <FeedbackButton />
                </Feedback>
                <RadixLink href={ '' }>
                    Changelog
                </RadixLink>
                <RadixLink href={ '' }>
                    Docs
                </RadixLink>
                <RadixLink href={ '' }>
                    GitHub
                </RadixLink>
                <DarkModeToggle />
            </Flex>
        </Flex>
    );
}