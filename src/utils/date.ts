/**
 * Utility function for checking if a date has expired or not. Used for snippet ephemeral expiration.
 * 
 * @param createdAt The date the snippet was created.
 * @param daysToAdd The number of days to add to the created date.
 * @returns A boolean indicating if the date has expired or not.
 */
export const hasDateExpired = (createdAt: string, daysToAdd: number) => {

    const expiresAt = new Date(createdAt);

    const todaysDate = new Date();

    expiresAt.setDate(expiresAt.getDate() + daysToAdd);
    
    return todaysDate > expiresAt;
}

export const formatDateToReadable = (createdAt: string) => {

    const date = new Date(createdAt);
    
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',    
        day: 'numeric'
    };
    
    // Convert the date to a readable format
    return date.toLocaleDateString(undefined, options);
}

export const expiresAt = (createdAt: string, days: number) => {
    
    const expiresAt = new Date(createdAt);

    expiresAt.setDate(expiresAt.getDate() + days);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    // Convert the expiresAt date to a readable format
    return expiresAt.toLocaleDateString(undefined, options);
}