/* eslint-disable react/prop-types */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export function createData(Job_Id, Job_Title, Experience_range, Salary_Range, Job_priority, Posted_on, Status, City, State, Action) {
  return { Job_Id, Job_Title, Experience_range, Salary_Range, Job_priority, Posted_on, Status, City, State, Action };
}


export default function RTable(props) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Id</TableCell>
            <TableCell align="right">Job Title</TableCell>
            <TableCell align="right">Experience Range</TableCell>
            <TableCell align="right">Salary Range</TableCell>
            <TableCell align="right">Job Priority</TableCell>
            <TableCell align="right">Posted on</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.jobs && props.jobs.map((row) => (
            <TableRow
              key={row.Job_Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Job_Id}
              </TableCell>
              <TableCell align="right">{row.Job_Title}</TableCell>
              <TableCell align="right">{row.Experience_range}</TableCell>
              <TableCell align="right">{row.Salary_Range}</TableCell>
              <TableCell align="right">{row.Job_priority}</TableCell>
              <TableCell align="right">{row.Posted_on}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
              <TableCell align="right">{row.State}</TableCell>
              <TableCell align="right"><Button>Apply</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
