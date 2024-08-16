'use client';

import { submitFeedback } from '@/actions/submit-feedback';
import { Box, Callout, Flex, Popover, Text, TextArea } from '@radix-ui/themes';
import { useState } from 'react';
import { FaRegFaceSadCry, FaRegFaceSadTear, FaRegFaceSmileBeam, FaRegFaceGrinStars } from "react-icons/fa6";
import { SubmitFeedbackButton } from './submit-feedback-button';
import { useFormState } from 'react-dom';
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

export const Feedback = ( { children } : { children: React.ReactNode } ) => {

    const [ activeRating, setActiveRating ] = useState<'great' | 'good' | 'bad' | 'terrible'>('great');

    const [ value, setValue ] = useState<string>('');

    const [ state, action ] = useFormState(submitFeedback, null);

    const MAX_LENGTH = 150;

    return (
        <Popover.Root>
            <Popover.Trigger>
                { children }
            </Popover.Trigger>
            <Popover.Content align={ 'center' } className={ 'p-2' }>
                { state === 'success' 
                    ? 
                        <Flex direction={ 'column' } align={ 'center' } gap={ '1' } p={ '5' }>
                            <FaCircleCheck size={ '2rem' } className={ 'text-[--accent-11]' }/>
                            <Text>Your feedback has been received!</Text>
                            <Text>Thank you for your help.</Text>
                        </Flex>
                    :
                    <form action={ action }>
                        <Box position={ 'relative' }>
                            <TextArea value={ value } onChange={ e => setValue(e.target.value) } maxLength={ MAX_LENGTH } name={ 'message' } placeholder={ 'Your feedback...' } className={ 'h-[100px] w-80' }/>
                            <Text color={ 'gray' } size={ '1' } className={ 'absolute bottom-2 right-2' }>{ value.length } / { MAX_LENGTH }</Text>
                        </Box>
                        { state === 'failed' && 
                            <Callout.Root size={ '1' } className={ 'mt-4' } color={ 'tomato' }>
                                <Callout.Icon>
                                    <MdOutlineErrorOutline />
                                </Callout.Icon>
                                <Callout.Text>
                                    Something went wrong, try again.
                                </Callout.Text>
                            </Callout.Root>
                        }
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
                            <SubmitFeedbackButton disabled={ value.length < 5 } />
                        </Flex>
                    </form>
                }
            </Popover.Content>
        </Popover.Root>
    );
}