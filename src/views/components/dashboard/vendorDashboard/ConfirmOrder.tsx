import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import img from 'src/assets/images/logos/mastercard.png';
import AlertModal from '../UserDashboard/AlertModal';

export default function ManageProduct() {
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
                            Update
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
                            <Tooltip
                                title="Click for update product"
                                placement="top"
                            >
                                <ModeEditIcon sx={{ color: '#4556B7' }} />
                            </Tooltip>
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
                            style={{
                                textAlign: 'center',
                                border: '1px solid lightgray',
                            }}
                        >
                            <Tooltip
                                title="Click for update product"
                                placement="top"
                            >
                                <ModeEditIcon sx={{ color: '#4556B7' }} />
                            </Tooltip>
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

            <AlertModal
                openModal={openModal}
                handleModalClose={handleModalClose}
            ></AlertModal>
        </>
    );
}
