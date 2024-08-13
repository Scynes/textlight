import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Box, Theme } from '@radix-ui/themes';
import { NavigationBar } from '@/components/core/navigation/navigation-bar';

import '@radix-ui/themes/styles.css';
import "@/globals.css";

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
        <html lang="en">
            <body className={nunito.variable}>
                <Theme appearance={ 'dark' } grayColor={ 'slate' }>
                    <NavigationBar />
                    <Box className={ 'py-6 px-4' }>
                        { children }
                    </Box>
                </Theme>
            </body>
        </html>
    );
}
