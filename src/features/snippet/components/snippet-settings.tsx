'use client';

import { Checkbox, Flex, Select, Switch, Text } from '@radix-ui/themes'
import { useState } from 'react';

export const SnippetSettings = () => {

    const [ expiration, setExpiration ] = useState<string>( '0' );

    const [ burnAfterReading, setBurnAfterReading ] = useState<boolean>( false );
    
    return (
        <Flex direction={ 'column' } className={ 'flex-1 gap-3 sm:w-72 sm:flex-initial' }>
            <Flex align={ 'center' } justify={ 'between' }>
                <Select.Root name={ 'expiration' } onValueChange={ setExpiration } value={ expiration } defaultValue={ expiration } size={ '3' }>
                    <Select.Trigger className={ 'flex-1' } variant={ 'surface' } />
                    <Select.Content position={ 'popper' }>
                        <Select.Item value={ '0' }>Expires: Never</Select.Item>
                        <Select.Item value={ '1' }>Expires: 1 Days</Select.Item>
                        <Select.Item value={ '5' }>Expires: 5 Days</Select.Item>
                        <Select.Item value={ '30' }>Expires: 30 Days</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Flex>
            <Flex className={ 'border rounded-md border-[--gray-7] px-4 py-2 flex-1' }>
                <Flex align={ 'center' } justify={ 'between' } className={ 'flex-1' }>
                    <Text>Burn After Reading</Text>
                    <Checkbox name={ 'burn' } value={ `${ burnAfterReading }` } checked={ burnAfterReading } hidden/>
                    <Switch checked={ burnAfterReading } onClick={ () => setBurnAfterReading(!burnAfterReading) }/>
                </Flex>
            </Flex>
        </Flex>
    )
}