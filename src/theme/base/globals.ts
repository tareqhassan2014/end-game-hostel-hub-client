const globals = {
    html: {
        scrollBehavior: 'smooth',
    },
    '*, *::before, *::after': {
        margin: 0,
        padding: 0,
    },
    'a, a:link, a:visited': {
        textDecoration: 'none !important',
    },
    'a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited': {
        transition: 'color 150ms ease-in !important',
    },
};

export default globals;
