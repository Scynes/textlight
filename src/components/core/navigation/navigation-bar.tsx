'use client';

import { Flex, Heading, Button, Link as RadixLink, Text, Box } from '@radix-ui/themes';
import { IoCodeSlashSharp } from "react-icons/io5";
import { DarkModeToggle } from '../dark-mode-toggle';
import { Feedback } from '../feedback/feedback';
import { FeedbackButton } from '../feedback/feedback-button';
import { MdNoteAdd } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export const NavigationBar = () => {

    const [ expanded, setExpanded ] = useState<boolean>(false);

    return (
        <>
            <Flex className={ `z-50 transition-[padding] ${ !expanded && 'border-b' } border-[--gray-7] px-4 sm:px-8 py-4 w-full bg-[--color-background]` } align={ 'center' } justify={ 'between' }>
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
                    <FeedbackButton>
                        <Feedback>
                            <Text className={ 'h-full w-full px-3 flex items-center' }>Feedback</Text>
                        </Feedback>
                    </FeedbackButton>
                    <DarkModeToggle />
                </Flex>
                <Flex className={ 'sm:hidden' } align={ 'center' } gap={ '4' }>
                    <Button asChild variant={ 'soft' } className={ 'transition-all cursor-pointer' }>
                        <Link href={ '/s' }>
                            <MdNoteAdd size={ '1.5rem' } />
                            <Text>Create</Text>
                        </Link>
                    </Button>
                    <Button onClick={ () => setExpanded(!expanded) } variant={ 'outline' } className={ 'cursor-pointer' }>
                        { !expanded ? <RxHamburgerMenu size={ '1.5rem' } /> : <RxCross1 size={ '1.5rem' } /> }
                    </Button>
                </Flex>
            </Flex>
            <Box className={ `${ expanded ? 'block' : 'hidden' } sm:hidden absolute h-dvh w-full bg-[--color-background] pt-[68px] z-30 px-2` }>
                <Flex direction={ 'column' } className={ 'pt-2 flex-1 h-full' }>
                    <Flex direction={ 'column' } gap={ '4' } className={ 'px-4' }>
                        <Button size={ '3' } variant={ 'soft' }>Sign Up</Button>
                        <Button size={ '3' } variant={ 'outline' }>Log In</Button>
                    </Flex>
                    <Flex direction={ 'column' } className={ 'mt-4' }>
                        <Link href={ 'https://github.com/Scynes/textlight' } className={ 'px-4 hover:bg-[--gray-3] py-3 rounded-md' }>
                            Changelog
                        </Link>
                        <Link href={ 'https://github.com/Scynes/textlight' } className={ 'px-4 hover:bg-[--gray-3] py-3 rounded-md' }>
                            Docs
                        </Link>
                        <Link href={ 'https://github.com/Scynes/textlight' } className={ 'px-4 hover:bg-[--gray-3] py-3 rounded-md' }>
                            GitHub
                        </Link>
                    </Flex>
                    <Box className={ 'mt-auto place-self-center pb-8' }>
                        <DarkModeToggle />
                    </Box>
                </Flex>
            </Box>
        </>
    );
}