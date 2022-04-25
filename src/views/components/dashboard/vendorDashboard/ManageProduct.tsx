import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Product ID', width: 250 },
    { field: 'productName', headerName: 'Product Name', width: 250 },
    { field: 'img', headerName: 'Product Image', width: 250 },
    {
        field: 'price',
        headerName: 'Product Price',
        type: 'number',
        width: 130,
        align: 'center',
    },

    {
        field: 'delete',
        headerName: 'Remove',
        type: 'number',
        width: 100,
        align: 'center',
    },
];

const rows = [
    {
        id: '6176f013e85f41e13d7823b1',
        productName: 'Apple Macbook air',
        img: 'Img',
        price: '$66',

        delete: 'X',
    },

    {
        id: '6176f013e85f41e13d7823b1',
        productName: 'Apple Macbook air',
        img: 'Img',
        price: '$66',

        delete: 'X',
    },

    {
        id: '6176f013e85f41e13d7823b1',
        productName: 'Apple Macbook air',
        img: 'Img',
        price: '$66',

        delete: 'X',
    },

    {
        id: '6176f013e85f41e13d7823b1',
        productName: 'Apple Macbook air',
        img: 'Img',
        price: '$66',

        delete: 'X',
    },
];

export default function ManageProduct() {
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
