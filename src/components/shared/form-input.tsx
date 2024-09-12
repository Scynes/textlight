import * as Form from '@radix-ui/react-form';

import { TextField } from '@radix-ui/themes';
import { ReactNode } from 'react';

type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time';

interface Properties {

    // The name of the input field.
    name: string;

    // The type of the input field.
    type: InputType;

    // The placeholder of the input field.
    placeholder: string;

    // Whether the input field is required.
    required?: boolean;

    // The size of the input field.
    size?: '1' | '2' | '3';

    // The icon of the input field.
    icon?: ReactNode;
}

export const FormInput = ( { name, type, placeholder, required, size, icon }: Properties ) => {

    return (
        <Form.Field name={ name }>
            <TextField.Root placeholder={ placeholder } size={ size } type={ type } name={ name } required={ required }>
                { icon && <TextField.Slot>{ icon }</TextField.Slot> }
            </TextField.Root>
        </Form.Field>
    );
}