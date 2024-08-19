import { Flex, Heading, Button, Link as RadixLink, Text } from '@radix-ui/themes';
import { IoCodeSlashSharp } from "react-icons/io5";
import { DarkModeToggle } from '../dark-mode-toggle';
import { Feedback } from '../feedback/feedback';
import { FeedbackButton } from '../feedback/feedback-button';
import { MdNoteAdd } from "react-icons/md";
import Link from 'next/link';

export const NavigationBar = () => {

    return (
        <Flex className={ 'transition-all border-b border-[--gray-7] px-4 sm:px-8 py-4 w-full bg-[--color-background]' } align={ 'center' } justify={ 'between' }>
            <Flex align={ 'center' } gap={ '1' }>
                <IoCodeSlashSharp size={ '1.5rem' } />
                <Heading size={ '6' } weight={ 'light' }>Textlight</Heading>
            </Flex>
            <Flex gap={ '4' } align={ 'center' } className={ 'hidden sm:flex' }>
                <Button asChild variant={ 'soft' } className={ 'transition-all cursor-pointer' }>
                    <Link href={ '/s' }>
                        <MdNoteAdd size={ '1.5rem' } />
                        <Text>Create</Text>
                    </Link>
                </Button>
                <RadixLink href={ 'https://github.com/Scynes/textlight' }>
                    Changelog
                </RadixLink>
                <RadixLink href={ 'https://github.com/Scynes/textlight' }>
                    Docs
                </RadixLink>
                <RadixLink href={ 'https://github.com/Scynes/textlight' }>
                    GitHub
                </RadixLink>
                <Feedback>
                    <FeedbackButton />
                </Feedback>
                <DarkModeToggle />
            </Flex>
        </Flex>
    );
}