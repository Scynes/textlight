import { Box, Button } from '@radix-ui/themes';
import { FaDiscord, FaFacebook, FaGoogle, FaTwitch } from 'react-icons/fa';
import { OAuthProvider } from '@/features/auth/types/oauth-provider';

export const OAuthButtonGroup = () => {

    const OAUTH_PROVIDERS: OAuthProvider[] = [
        {
            name: 'discord',
            icon: FaDiscord,
            color: '#5865f2'
        },
        {
            name: 'facebook',
            icon: FaFacebook,
            color: '#1877f2'
        },
        {
            name: 'google',
            icon: FaGoogle,
            color: '#ea3455'
        },
        {
            name: 'twitch',
            icon: FaTwitch,
            color: '#9146ff'
        }
    ]

    return (
        <Box className='flex w-full justify-between gap-4'>
            { OAUTH_PROVIDERS.map(( provider, index ) => (
                <Button key={ index } className={ `cursor-pointer bg-[--gray-5] h-12 flex-1 transition-all duration-150 border-0 border-b-4 hover:border-b-[8px] border-solid border-[${ provider.color }] text-[${ provider.color }]` } style={{ borderColor: provider.color, color: provider.color }}>
                    <provider.icon size={ 20 } />
                </Button>
            )) }
        </Box>
    );
}