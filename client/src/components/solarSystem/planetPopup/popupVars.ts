export const mainContainerVars = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
    exit: {
        opacity: 0,
        transition: { delay: 0.5, duration: 0.5 },
    },
};

export const planetContainerVars = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { delay: 0.5, duration: 0.5 },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
    },
};
