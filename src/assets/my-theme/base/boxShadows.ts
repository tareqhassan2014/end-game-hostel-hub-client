import boxShadow from '../functions/boxShadow';

const coloredShadows = {
    primary: '#e91e62',
    secondary: '#110e0e',
    info: '#00bbd4',
    success: '#4caf4f',
    warning: '#ff9900',
    error: '#f44336',
    light: '#adb5bd',
    dark: '#404040',
};

const black = {
    main: '#000',
};
const white = {
    main: '#000',
};

const boxShadows = [
    'none',
    boxShadow([0, 1], [5, 1], '#ddd', 1),
    boxShadow([0, 1], [13, 0], black.main, 0.2),
    boxShadow([0, 2], [9, -5], black.main, 0.15),
    boxShadow([0, 5], [10, 0], black.main, 0.12),
    boxShadow([0, 20], [27, 0], black.main, 0.05),
    boxShadow([0, 1], [2, 0], black.main, 0.075, 'inset'),

    `${boxShadow([0, 4], [6, -1], black.main, 0.1)}, ${boxShadow(
        [0, 2],
        [4, -1],
        black.main,
        0.06
    )}`,

    `${boxShadow([0, 10], [15, -3], black.main, 0.1)}, ${boxShadow(
        [0, 4],
        [6, -2],
        black.main,
        0.05
    )}`,

    `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
        [0, 7],
        [10, -5],
        coloredShadows.info,
        0.4
    )}`,

    `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
        [0, 7],
        [10, -5],
        coloredShadows.primary,
        0.4
    )}`,

    `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
        [0, 7],
        [10, -5],
        coloredShadows.success,
        0.4
    )}`,

    `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
        [0, 7],
        [10, -5],
        coloredShadows.warning,
        0.4
    )}`,

    `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
        [0, 7],
        [10, -5],
        coloredShadows.error,
        0.4
    )}`,

    `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
        [0, 7],
        [10, -5],
        coloredShadows.light,
        0.4
    )}`,

    `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
        [0, 7],
        [10, -5],
        coloredShadows.dark,
        0.4
    )}`,

    `${boxShadow([0, 0], [1, 1], white.main, 0.9, 'inset')}, ${boxShadow(
        [0, 20],
        [27, 0],
        black.main,
        0.05
    )}`,

    `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
        [0, 7],
        [10, -5],
        coloredShadows.secondary,
        0.4
    )}`,

    `${boxShadow([0, 20], [25, -5], black.main, 0.1)}, ${boxShadow(
        [0, 10],
        [10, -5],
        black.main,
        0.04
    )}`,
];

export default boxShadows;
