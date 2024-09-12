export const FORM_TRANSITION = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
}

export const INPUT_TRANSITION = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
}

export const INPUT_TRANSITION_CONTAINER = {

    hidden: { opacity: 0 },

    show: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.15
        }
    }
}