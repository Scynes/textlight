import { Flex, Text } from '@radix-ui/themes';

import { FaCheck } from "react-icons/fa";

interface Properties {

    // Flag for if the requirement has been validated.
    valid: boolean

    // The message to display the reequirement.
    message: string
}

export const InputValidationCheckoff = ( { message, valid }: Properties ) => {
    return (
        <Flex gap={ '1' } align={ 'center' }>
            <FaCheck size={ 10 } className={ `${ valid ? 'text-[--accent-10]' : 'text-[--gray-8]' }` } />
            <Text as='span' size={ { initial: '1', sm: '2' } } className={ `${ valid ? 'text-[--gray-11]' : 'text-[--gray-8]' } select-none` }>{ message }</Text>
        </Flex>
    );
}