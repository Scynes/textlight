'use client';

import { submitFeedback } from '@/actions/submit-feedback';
import { Box, Button, Flex, Popover, TextArea } from '@radix-ui/themes';
import { useState } from 'react';
import { useFormState } from 'react-dom';

import { FaRegFaceSadCry, FaRegFaceSadTear, FaRegFaceSmileBeam, FaRegFaceGrinStars } from "react-icons/fa6";
import { SubmitFeedbackButton } from './submit-feedback-button';

export const Feedback = ( { children } : { children: React.ReactNode } ) => {

    const [ activeRating, setActiveRating ] = useState<'great' | 'good' | 'bad' | 'terrible'>('great');
    
    useFormState

    return (
        <Popover.Root>
            <Popover.Trigger>
                { children }
            </Popover.Trigger>
            <Popover.Content align={ 'center' } className={ 'p-2' }>
                <form action={ submitFeedback }>
                    <TextArea name={ 'message' } placeholder={ 'Your feedback...' } className={ 'h-[100px] w-80' }/>
                    <Flex justify={ 'between' } align={ 'center' } className={ 'mt-4' } >
                        <Flex gap={ '1' } align={ 'center' } className={ 'text-[--accent-11]' }>
                            <Box p={ '2' } className={ `transition-all cursor-pointer rounded-full active:scale-95 ${ activeRating === 'great' ? 'bg-[--accent-5]' : 'hover:bg-[--accent-3]' }` } onClick={ () => setActiveRating('great') }>
                                <FaRegFaceGrinStars size={ '1rem' } />
                            </Box>
                            <Box p={ '2' } className={ `transition-all cursor-pointer rounded-full active:scale-95 ${ activeRating === 'good' ? 'bg-[--accent-5]' : 'hover:bg-[--accent-3]' }` } onClick={ () => setActiveRating('good') }>
                                <FaRegFaceSmileBeam size={ '1rem' } />
                            </Box>
                            <Box p={ '2' } className={ `transition-all cursor-pointer rounded-full active:scale-95 ${ activeRating === 'bad' ? 'bg-[--accent-5]' : 'hover:bg-[--accent-3]' }` } onClick={ () => setActiveRating('bad') }>
                                <FaRegFaceSadTear size={ '1rem' } />
                            </Box>
                            <Box p={ '2' } className={ `transition-all cursor-pointer rounded-full active:scale-95 ${ activeRating === 'terrible' ? 'bg-[--accent-5]' : 'hover:bg-[--accent-3]' }` } onClick={ () => setActiveRating('terrible') }>
                                <FaRegFaceSadCry size={ '1rem' } />
                            </Box>
                        </Flex>
                        <input defaultValue={ activeRating } name={ 'rating' } type={ "text" } value={ activeRating } hidden/>
                        <SubmitFeedbackButton />
                    </Flex>
                </form>
            </Popover.Content>
        </Popover.Root>
    );
}