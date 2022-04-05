import * as React from 'react';
import useAuth from '../../../../hooks/useAuth';

// Generate Order Data
function createData(
    id: number,
    date: string,
    name: string,
    shipTo: string,
    paymentMethod: string,
    amount: number
) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Elvis Presley',
        'Tupelo, MS',
        'VISA ⠀•••• 3719',
        312.44
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Paul McCartney',
        'London, UK',
        'VISA ⠀•••• 2574',
        866.99
    ),
    createData(
        2,
        '16 Mar, 2019',
        'Tom Scholz',
        'Boston, MA',
        'MC ⠀•••• 1253',
        100.81
    ),
    createData(
        3,
        '16 Mar, 2019',
        'Michael Jackson',
        'Gary, IN',
        'AMEX ⠀•••• 2000',
        654.39
    ),
    createData(
        4,
        '15 Mar, 2019',
        'Bruce Springsteen',
        'Long Branch, NJ',
        'VISA ⠀•••• 5919',
        212.79
    ),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

const statusButton = {};

export default function Orders() {
    const { user } = useAuth();
    const query = user.role === 'admin' ? '' : `/user/${user.email}`;

    return <div>Loading....</div>;
}
