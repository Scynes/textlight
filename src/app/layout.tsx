import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Box, Callout, Container, Link, Theme } from '@radix-ui/themes';
import { NavigationBar } from '@/components/core/navigation/navigation-bar';
import { ThemeProvider } from 'next-themes';
import { RxInfoCircled } from "react-icons/rx";
import { ToastContainer } from 'react-toastify';

import '@radix-ui/themes/styles.css';
import "@/globals.css";
import 'react-toastify/dist/ReactToastify.css';

const nunito = Nunito({ 
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-nunito',
});

export const metadata: Metadata = {
    title: "Textlight",
    description: "Share your thoughts with the world. In style.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={nunito.variable}>
                <ThemeProvider attribute="class">
                    <ToastContainer />
                    <Theme grayColor={ 'slate' }>
                        <NavigationBar />
                        <Container size={ '3' } className={ 'px-4' }>
                            <Callout.Root color={ 'blue' } className={ 'mt-4' }>
                                <Callout.Icon>
                                    <RxInfoCircled size={ '1rem' }/>
                                </Callout.Icon>
                                <Callout.Text>
                                    This is an early version of Textlight. Please <Link href={ 'https://github.com/Scynes/textlight/issues' }>report any issues</Link> you encounter.
                                </Callout.Text>
                            </Callout.Root>
                        </Container>
                        <Box className={ 'py-4 px-4' }>
                            { children }
                        </Box>
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    );
}
