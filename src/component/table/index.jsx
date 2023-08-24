import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledTableCell, StyledTableRow } from "./style";
import { ROWS } from './constant';

const CustomTable = ({ data }) => {
  console.log(data, "data")
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {ROWS.map((item) => (
              <StyledTableCell>{item}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length && data.map((ele, index) => (
            <StyledTableRow key={ele.name}>
              <StyledTableCell component="th" scope="row">
                {index}
              </StyledTableCell>
              <StyledTableCell>{ele._id}</StyledTableCell>
              <StyledTableCell>{ele.name}</StyledTableCell>
              <StyledTableCell>{ele.email}</StyledTableCell>
              <StyledTableCell>{ele.role}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
