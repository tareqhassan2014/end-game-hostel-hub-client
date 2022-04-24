import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ManageOrder() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{ fontWeight: 'bold', color: '#989595' }}
                            align="center"
                        >
                            Sr No
                        </TableCell>
                        <TableCell
                            sx={{ fontWeight: 'bold', color: '#989595' }}
                            align="left"
                        >
                            Name
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                component="th"
                                sx={{ color: '#666666' }}
                                scope="row"
                                align="left"
                            >
                                {index + 1}
                            </TableCell>
                            <TableCell
                                component="th"
                                sx={{ color: '#666666' }}
                                scope="row"
                                align="left"
                            >
                                Rashidul
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
