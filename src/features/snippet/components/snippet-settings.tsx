'use client';

import { Flex, Text } from '@radix-ui/themes'
import { useState } from 'react';
import { IoSettingsSharp, IoChevronUp, IoChevronDown } from 'react-icons/io5';

export const SnippetSettings = () => {

    const [ settingsOpen, setSettingsOpen ] = useState(false);
    
    return (
        <Flex direction={ 'column' } className={ 'rounded-md flex-1 border border-[--gray-7]' }>
            <Flex onClick={ () => setSettingsOpen(!settingsOpen) } className={ `transition-all w-full h-[37px] cursor-pointer px-4 select-none hover:text-[--gray-10]` } align={ 'center' } justify={ 'between' }>
                <Flex align={ 'center' } gap={ '3' }>
                    <IoSettingsSharp />
                    <Text>Additional Options</Text>
                </Flex>
                <Flex>
                    { settingsOpen ? <IoChevronUp /> : <IoChevronDown /> }
                </Flex>
            </Flex>
            <Flex className={ `transition-all ${ settingsOpen ? 'h-40 py-2 border-[--gray-7]' : 'border-transparent h-0' } flex-col border-t overflow-hidden px-4` }>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
            </Flex>
        </Flex>
    )
}