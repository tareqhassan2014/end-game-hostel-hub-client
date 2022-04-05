import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useGetAppointmentByEmailQuery } from '../../../app/services/api';
import { useAuth } from '../../../Hooks/useAuth';
import Title from './Title';

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
    const { data, isLoading, isFetching } =
        useGetAppointmentByEmailQuery(query);

    return isLoading || isFetching ? (
        <div>Loading....</div>
    ) : (
        <React.Fragment>
            <Title>
                {user.role === 'admin'
                    ? 'All Appointments'
                    : 'Your Appointments'}
            </Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Order</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.data.map((row, index) => (
                        <TableRow key={row._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                {new Date(row.date).toDateString()}
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                            <TableCell align="right">
                                <Button sx={statusButton}>{row.status}</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link
                color="primary"
                href="#"
                onClick={preventDefault}
                sx={{ mt: 3 }}
            >
                See more orders
            </Link>
        </React.Fragment>
    );
}
