import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as React from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Product ID', width: 220 },
    { field: 'firstName', headerName: 'Email', width: 250 },
    { field: 'lastName', headerName: 'Phone', width: 140 },
    {
        field: 'age',
        headerName: 'Payment',
        type: 'number',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100,
        valueGetter: (params: GridValueGetterParams) => `Pending`,
    },
    {
        field: 'confirm',
        headerName: 'Confirm',
        type: 'number',
        width: 90,
    },
    {
        field: 'delete',
        headerName: 'Remove',
        type: 'number',
        width: 90,
    },
];

const rows = [
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
    {
        id: '6176f013e85f41e13d7823b1',
        lastName: '+8801736919983',
        firstName: 'rashidulislam.official1@gmail.com',
        age: 'Pay $66',
        confirm: 'Approve',
        delete: 'X',
    },
];

export default function ConfirmOrder() {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
