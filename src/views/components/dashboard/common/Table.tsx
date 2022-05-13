import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },

    {
        field: 'gender',
        headerName: 'gender',
        type: 'string',
        width: 90,
    },

    {
        field: 'bills',
        headerName: 'bills (tk)',
        type: 'number',
        width: 90,
    },

    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', gender: 'male', bills: 35 },
    {
        id: 2,
        lastName: 'Lannister',
        firstName: 'Cersei',
        gender: 'male',
        bills: 42,
    },
    {
        id: 3,
        lastName: 'Lannister',
        firstName: 'Jaime',
        gender: 'female',
        bills: 45,
    },
    { id: 4, lastName: 'Stark', firstName: 'Arya', gender: 'male', bills: 16 },
    {
        id: 5,
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        gender: 'female',
        bills: 25,
    },
    {
        id: 6,
        lastName: 'Melisandre',
        firstName: 'Smith',
        gender: 'male',
        bills: 150,
    },
    {
        id: 7,
        lastName: 'Clifford',
        firstName: 'Ferrara',
        gender: 'female',
        bills: 44,
    },
    {
        id: 8,
        lastName: 'Frances',
        firstName: 'Rossini',
        gender: 'male',
        bills: 36,
    },
    {
        id: 9,
        lastName: 'Roxie',
        firstName: 'Harvey',
        gender: 'male',
        bills: 65,
    },
];

const Table = () => {
    return (
        <Box
            sx={{ width: { lg: '48%', md: '54%', sm: '50%', xs: '100%' } }}
            style={{ height: 400 }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Box>
    );
};

export default Table;
