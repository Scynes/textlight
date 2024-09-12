import { Flex, Separator, Box } from '@radix-ui/themes';

import { OAuthButtonGroup } from '@/features/auth/components/oauth-button-group';

interface Properties {
        
    // The children of the component.
    children: React.ReactNode
}

export const AuthFormWrapper = ( { children }: Properties ) => {
    return (
        <>
            <OAuthButtonGroup />
            <Flex align={ 'center' } gap={ '2' } className={ 'mb-4 mt-4' }>
                <Separator className='flex-1'/>
                <Box as={ 'span' } className={ 'text-xs' }>OR</Box>
                <Separator className='flex-1'/>
            </Flex>
            { children }
        </>
    );
}