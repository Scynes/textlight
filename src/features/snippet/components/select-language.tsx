'use client';

import { Flex, Select } from '@radix-ui/themes';
import { Languages } from '../constants/languages';
import { useState } from 'react';

export const SelectLanguage = () => {

    const [ value, setValue ] = useState( 'text' );

    return (
        <Select.Root size={ '3' } name={ 'language' } value={ value } onValueChange={ setValue }>
            <Select.Trigger className={ 'cursor-pointer !w-full sm:!w-40' }>
                <Flex as={ 'span' }>
                    { Languages.find( language => language.alias === value )?.name || 'Text' }
                </Flex>
            </Select.Trigger>
            <Select.Content position={ 'popper' }>
                <Select.Item value={ 'text' }>Text</Select.Item>
                { Languages.map( language => (
                    <Select.Item key={ language.alias } value={ language.alias }>
                        { language.name }
                    </Select.Item>
                )) }
            </Select.Content>
        </Select.Root>
    );
}