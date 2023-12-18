import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const EmpTable = ({Employees}) =>{

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  >Employee ID</StyledTableCell>
            <StyledTableCell >Employee Name</StyledTableCell>
            <StyledTableCell >Employee Salary</StyledTableCell>
            <StyledTableCell align="right" >Course Fees</StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {Employees.map((Emp) => (
            <StyledTableRow key={Emp.EmployeeName}> 
              <StyledTableCell >{Emp.enrollmentNo }</StyledTableCell>
              <StyledTableCell  component="th" scope="row">{Emp.EmployeeName}</StyledTableCell>
              <StyledTableCell >{Emp.courseFee}</StyledTableCell>
              <StyledTableCell align="right">{Emp.coureDuration}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default EmpTable