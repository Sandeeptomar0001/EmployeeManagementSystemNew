import React, { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ViewEmployees = ({ Employees, onDelete, onUpdate }) => {
    const [editingIndex, setEditingIndex] = useState(-1); // Change the initial state here

    const [updatedEmployees, setUpdatedEmployees] = useState({
        enrollmentNo: '',
        EmployeeName: '',
        emailID: '',
        mobileNumber: '',
        city: '',
        qualifications: '',
        courseName: '',
        courseDuration: '',
        totalFees: '',
        discount: '',
        actualFee: '',
        counsellorName: '',
    });

    const handleUpdateClick = (index) => {
        if (editingIndex === index) {
            onUpdate(index, updatedEmployees);
            setEditingIndex(-1);
            setUpdatedEmployees({
                enrollmentNo: '',
                EmployeeName: '',
                emailID: '',
                mobileNumber: '',
                city: '',
                qualifications: '',
                courseName: '',
                courseDuration: '',
                totalFees: '',
                discount: '',
                actualFee: '',
                counsellorName: '',
            });
        } else {
            setEditingIndex(index);
            setUpdatedEmployees(Employees[index]);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedEmployees((prevEmployees) => ({
            ...prevEmployees,
            [name]: value,
        }));
    };

    return (
        <TableContainer component={Paper} sx={{ margin: '20px auto', maxWidth: '90%', overflowX: 'auto' }} >
            <Table sx={{ minWidth: 650 }} aria-label="Employees table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }} >Enrollment No.</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Employee Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Email ID</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Mobile Number</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >City</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Qualifications</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >ID</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Course Duration</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Total Fees</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Discount</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Actual Fee</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Counsellor Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Employees.map((Employees, index) => (
                        <TableRow key={index} sx={editingIndex === index ? { '& > *': { borderBottom: 'unset' } } : {}}>
                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="enrollmentNo"
                                        value={updatedEmployees.enrollmentNo}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.enrollmentNo
                                )}
                            </TableCell>
                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="EmployeeName"
                                        value={updatedEmployees.EmployeeName}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.EmployeeName
                                )}
                            </TableCell>
                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="emailID"
                                        value={updatedEmployees.emailID}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.emailID
                                )}
                            </TableCell>
                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="mobileNumber"
                                        value={updatedEmployees.mobileNumber}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.mobileNumber
                                )}
                            </TableCell>

                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="city"
                                        value={updatedEmployees.city}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.city
                                )}
                            </TableCell>

                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="qualifications"
                                        value={updatedEmployees.qualifications}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.qualifications
                                )}
                            </TableCell>

                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="courseName"
                                        value={updatedEmployees.courseName}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.courseName
                                )}
                            </TableCell>

                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="courseDuration"
                                        value={updatedEmployees.courseDuration}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.courseDuration
                                )}
                            </TableCell>

                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="totalFees"
                                        value={updatedEmployees.totalFees}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.totalFees
                                )}
                            </TableCell>

                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="discount"
                                        value={updatedEmployees.discount}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.discount
                                )}
                            </TableCell>

                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="actualFee"
                                        value={updatedEmployees.actualFee}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.actualFee
                                )}
                            </TableCell>
                            <TableCell>
                                {editingIndex === index ? (
                                    <TextField
                                        name="counsellorName"
                                        value={updatedEmployees.counsellorName}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    Employees.counsellorName
                                )}
                            </TableCell>
                            <TableCell>
                                <button onClick={() => handleUpdateClick(index)}>
                                    {editingIndex === index ? <SaveIcon /> : <ModeEditIcon />}
                                </button>
                                <button onClick={() => onDelete(index)}><DeleteIcon /></button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ViewEmployees;
