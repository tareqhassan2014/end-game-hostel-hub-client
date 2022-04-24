import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as React from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Email', headerName: 'Product ID', width: 130 },
    { field: 'Phone', headerName: 'Phone', width: 130 },

    {
        field: 'productId',
        headerName: 'Product ID',
        type: 'string',
        width: 90,
    },

    {
        field: 'age',
        headerName: 'Age',
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', gender: 'male', age: 35 },
    {
        id: 2,
        lastName: 'Lannister',
        firstName: 'Cersei',
        gender: 'male',
        age: 42,
    },
    {
        id: 3,
        lastName: 'Lannister',
        firstName: 'Jaime',
        gender: 'female',
        age: 45,
    },
    { id: 4, lastName: 'Stark', firstName: 'Arya', gender: 'male', age: 16 },
    {
        id: 5,
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        gender: 'female',
        age: 25,
    },
    {
        id: 6,
        lastName: 'Melisandre',
        firstName: 'Smith',
        gender: 'male',
        age: 150,
    },
    {
        id: 7,
        lastName: 'Clifford',
        firstName: 'Ferrara',
        gender: 'female',
        age: 44,
    },
    {
        id: 8,
        lastName: 'Frances',
        firstName: 'Rossini',
        gender: 'male',
        age: 36,
    },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', gender: 'male', age: 65 },
];

const ManageOrder = () => {
    return (
        <Box
            sx={{ width: { lg: '100%', md: '100%', sm: '100%', xs: '100%' } }}
            style={{ height: '100%' }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[1]}
                checkboxSelection
            />
        </Box>
    );
};

export default ManageOrder;
