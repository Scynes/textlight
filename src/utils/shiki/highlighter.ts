import { useEffect, useState } from 'react';
import { createHighlighter, Highlighter } from 'shiki';

// Define the custom hook
export const useHighlighter = (): Highlighter | null => {
    const [highlighter, setHighlighter] = useState<Highlighter | null>(null);

    useEffect(() => {
        // Function to initialize the highlighter
        const initializeHighlighter = async () => {
            try {
                const instance = await createHighlighter({
                    langs: ['html', 'css', 'js'],
                    themes: ['github-dark', 'github-light'],
                });
                setHighlighter(instance);
            } catch (error) {
                console.error("Failed to create highlighter:", error);
            }
        };

        initializeHighlighter();
    }, []); // Empty dependency array ensures this runs only once after the initial render

    return highlighter;
};
