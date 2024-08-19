import { Callout, Container, Link } from '@radix-ui/themes';
import { RxInfoCircled } from 'react-icons/rx';

export const Announcement = () => {
    return (
        <Container size={ '3' } className={ 'px-4' }>
            <Callout.Root className={ 'mt-4 mb-4' } variant={ 'surface' }>
                <Callout.Icon>
                    <RxInfoCircled size={ '1rem' }/>
                </Callout.Icon>
                <Callout.Text>
                    This is an early version of Textlight. Please <Link href={ 'https://github.com/Scynes/textlight/issues' }>report any issues</Link> you encounter.
                </Callout.Text>
            </Callout.Root>
        </Container>
    );
}