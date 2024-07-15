import React from 'react'
import {Toolbar,CssBaseline,Box, Container, Button} from '@mui/material'



import { Outlet,Link } from 'react-router-dom';
import RTable from '../components/RTable';
import SideForm from '../components/SideForm';
import { useState } from 'react';

export default function Dashboard() {
  const [jobs, setJobs] = useState([])
 
  return (
    <Box>
    <CssBaseline />
    <Toolbar />
    <Container className='fluid mt-10'>
    <SideForm jobs={jobs} setJobs={setJobs} />
    <RTable jobs={jobs} />
    </Container>
    
    <Outlet/>
    
    </Box>
    
    );
  }
