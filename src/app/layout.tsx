import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Theme } from '@radix-ui/themes';

import "@/globals.css";
import '@radix-ui/themes/styles.css';
import "highlight.js/styles/github.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Textlight",
    description: "Share your thoughts with the world. In style.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Theme appearance={ 'dark' }>
                    <Box className={ 'h-dvh' }>
                        { children }
                    </Box>
                </Theme>
            </body>
        </html>
    );
}
