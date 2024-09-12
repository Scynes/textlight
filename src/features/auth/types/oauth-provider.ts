import { Provider } from '@supabase/supabase-js';
import { IconType } from 'react-icons';

/**
 * The OAuthProvider interface defines the shape of an OAuth provider.
 */
export interface OAuthProvider {

    // The name of the OAuth provider.
    name: Provider;

    // The icon of the OAuth provider.
    icon: IconType;

    // Represents the brand color of the OAuth provider.
    color: string;
}