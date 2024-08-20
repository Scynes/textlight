import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Box, Callout, Container, Grid, Link, Text, Theme } from '@radix-ui/themes';
import { NavigationBar } from '@/components/core/navigation/navigation-bar';
import { ThemeProvider } from 'next-themes';
import { RxInfoCircled } from "react-icons/rx";
import { ToastContainer } from 'react-toastify';

import '@radix-ui/themes/styles.css';
import "@/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { Announcement } from '@/components/shared/announcement';

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
                <ThemeProvider attribute="class" defaultTheme={ 'dark' }>
                    <ToastContainer />
                    <Theme grayColor={ 'slate' } accentColor={ 'iris' }>
                        <Grid rows={ 'auto 1fr' } className={ 'h-dvh' }>
                            <NavigationBar />
                            <Box className={ 'overflow-x-hidden overflow-y-scroll' }>
                                { children }
                            </Box>
                        </Grid>
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    );
}
