import { Button, Flex, IconButton, Inset, Popover, Separator, Text, TextArea } from '@radix-ui/themes';

import { FaRegFaceSadCry, FaRegFaceSadTear, FaRegFaceSmileBeam, FaRegFaceGrinStars } from "react-icons/fa6";

export const Feedback = ( { children } : { children: React.ReactNode } ) => {
    return (
        <Popover.Root>
            <Popover.Trigger>
                { children }
            </Popover.Trigger>
            <Popover.Content align={ 'center' } className={ 'p-2' }>
                <form>
                    <TextArea placeholder={ 'Your feedback...' } className={ 'h-[100px] w-80' }/>
                    <Flex justify={ 'between' } align={ 'center' } className={ 'mt-4' } >
                        <Flex gap={ '3' }>
                            <IconButton variant={ 'ghost' } radius={ 'full' } className={ 'cursor-pointer' }>
                                <FaRegFaceGrinStars size={ '1rem' } />
                            </IconButton>
                            <IconButton variant={ 'ghost' } radius={ 'full' } className={ 'cursor-pointer' }>
                                <FaRegFaceSmileBeam size={ '1rem' } />
                            </IconButton>
                            <IconButton variant={ 'ghost' } radius={ 'full' } className={ 'cursor-pointer' }>
                                <FaRegFaceSadTear size={ '1rem' } />
                            </IconButton>
                            <IconButton variant={ 'ghost' } radius={ 'full' } className={ 'cursor-pointer' }>
                                <FaRegFaceSadCry size={ '1rem' } />
                            </IconButton>
                        </Flex>
                        <Button>Send</Button>
                    </Flex>
                </form>
            </Popover.Content>
        </Popover.Root>
    );
}