import { InputValidationCheckoff } from '@/components/shared/input-validation-checkoff';
import { Grid } from '@radix-ui/themes';

interface Properties { password: string }

/**
 * This component displays the password requirements for a password input. It is not to be relied upon
 * for password validation, but rather to provide the user with a visual representation of the requirements.
 * 
 * @param password The password to check the requirements against.
 */
export const PasswordRequirements = ( { password }: Properties ) => {

    const REQUIREMENTS = [
        { label: '8 characters minimum', regex: /(?=.{8,})/ },
        { label: 'One uppercase letter', regex: /(?=.*[A-Z])/ },
        { label: 'One special character', regex: /(?=.*[!@#$%^&*])/ },
        { label: 'One number', regex: /(?=.*\d)/ },
    ];

    return (
        <Grid columns={ '2' } gap={ '1' }>
            { REQUIREMENTS.map(( requirement, index ) => (
                <InputValidationCheckoff key={ index } message={ requirement.label } valid={ requirement.regex.test(password) } />
            ))}
        </Grid>
    );
}