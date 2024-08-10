import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import "@/globals.css";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Textlight",
    description: "Share your thoughts with the world. In style.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={oswald.className}>
                <Theme appearance={ 'dark' }>
                    { children }
                </Theme>
            </body>
        </html>
    );
}
