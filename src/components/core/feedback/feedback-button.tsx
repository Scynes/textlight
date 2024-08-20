import { Button } from '@radix-ui/themes';

export const FeedbackButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button variant={ 'outline' } className={ 'cursor-pointer transition-all p-0' }>
            { children }
        </Button>
    );
}