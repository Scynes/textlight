import { IconButton, Tooltip } from '@radix-ui/themes';
import { RxCopy } from 'react-icons/rx';

export const CopyButton = ( { text }: { text: string } ) => {

    const copyContent = () => {
        navigator.clipboard.writeText(text);
    }

    return (
        <Tooltip content={ 'Copy Content' }>
            <IconButton onClick={ copyContent } variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                <RxCopy size={ '1.25rem' }/>
            </IconButton>
        </Tooltip>
    );
}