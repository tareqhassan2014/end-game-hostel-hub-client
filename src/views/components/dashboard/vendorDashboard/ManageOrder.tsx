import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import img from '../../../../assets/images/logos/mastercard.png';
import UpdateModal from './UpdateModal';

export default function ManageOrder() {
    const [openModal, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <Table>
                <Thead style={{ background: '#4556B7' }}>
                    <Tr>
                        <Th style={{ color: 'white', textAlign: 'center' }}>
                            ID
                        </Th>
                        <Th style={{ color: 'white', textAlign: 'center' }}>
                            IMAGE
                        </Th>
                        <Th style={{ color: 'white', textAlign: 'center' }}>
                            NAME
                        </Th>
                        <Th style={{ color: 'white', textAlign: 'center' }}>
                            Payment
                        </Th>
                        <Th style={{ color: 'white', textAlign: 'center' }}>
                            Status
                        </Th>
                        <Th style={{ color: 'white', textAlign: 'center' }}>
                            Remove
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td
                            style={{
                                textAlign: 'center',
                                border: '1px solid lightgray',
                            }}
                        >
                            0980284024820
                        </Td>
                        <Td
                            style={{
                                textAlign: 'center',
                                border: '1px solid lightgray',
                            }}
                        >
                            <img width="30px" src={img} alt="" />
                        </Td>
                        <Td
                            style={{
                                textAlign: 'center',
                                border: '1px solid lightgray',
                            }}
                        >
                            Apple Mac book
                        </Td>
                        <Td
                            onClick={handleModalOpen}
                            style={{
                                textAlign: 'center',
                                border: '1px solid lightgray',
                            }}
                        >
                            <button>Pay: $99</button>
                        </Td>
                        <Td
                            onClick={handleModalOpen}
                            style={{
                                textAlign: 'center',
                                border: '1px solid lightgray',
                            }}
                        >
                            <button>Pending</button>
                        </Td>
                        <Td
                            style={{
                                textAlign: 'center',
                                border: '1px solid lightgray',
                            }}
                        >
                            <Tooltip
                                title="Click for update product"
                                placement="top"
                            >
                                <DeleteIcon sx={{ color: 'red' }} />
                            </Tooltip>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>

            <UpdateModal
                openModal={openModal}
                handleModalClose={handleModalClose}
            ></UpdateModal>
        </>
    );
}
