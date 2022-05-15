import styled from '@emotion/styled';

export const MyButton = styled('button')({
    cursor: 'pointer',
    border: 0,
    fontSize: 16,
    color: '#fff',
    lineHeight: 2.5,
    fontWeight: 500,
    borderRadius: 12,
    padding: '0 1rem',
    textAlign: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    outline: 'transparent',
    textDecoration: 'none',
    display: 'inline-block',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    textTransform: 'capitalize',
    transition: 'box-shadow 0.2s ease-in-out',
    background: 'linear-gradient(to right, #dd5e89, #e49767)',
    fontFamily:
        "-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    '&:hover': {
        boxShadow:
            '0 0 0.15rem rgba(0, 0, 0, 0.5), -0.125rem -0.25rem 1rem rgba(71, 172, 239, 0.5), 0.125rem 0.25rem 1rem rgba(255, 154, 90, 0.5)',
    },
    '&:focus': {
        boxShadow:
            '0 0 0.15rem rgba(0, 0, 0, 0.5), -0.125rem -0.25rem 1rem rgba(71, 172, 239, 0.5), 0.125rem 0.25rem 1rem rgba(255, 154, 90, 0.5)',
    },
});

export const bannerItem = [
    {
        title: 'Get a betterment environment for hostel life',
        description:
            'You can live like royalty in elegant hostels or find a bargain at hostels right in the city center. Come fast and get your chance.',
        button: 'Find Available Hostel',
        link: '/search-hostel',
        lottie: 'https://assets5.lottiefiles.com/packages/lf20_2gfeptkg.json',
    },
    {
        title: 'Five different unique dashboards are the main attraction',
        description:
            'A numerous analytical update defines different role player&#39;s experience.get our services and create your dashboard.',
        button: 'Create Your Dashboard',
        link: '/dashboard',
        lottie: 'https://assets4.lottiefiles.com/packages/lf20_n5hsffgz.json',
    },
    {
        title: 'Buy and sell your products with good price',
        description:
            ' Replace your products by purchasing and selling them. make money and decorate your rooms with super new set-up',
        button: 'Deal With Your Need',
        link: '/search-old-items',
        lottie: 'https://assets3.lottiefiles.com/private_files/lf30_ti7aknf9.json',
    },
    {
        title: 'Receive your delivery items from the delivery man timely',
        description:
            'Get your exact quality products without any kinds of scratch and fracture. Make your delivery man satisfied and be happy yourself.',
        button: 'Get Delivery Info',
        link: '/dashboard/profile',
        lottie: 'https://assets7.lottiefiles.com/packages/lf20_3tryizhw.json',
    },
];
