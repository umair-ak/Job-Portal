import React from 'react'
import {Toolbar,CssBaseline,Box, Container, Button} from '@mui/material'



import { Outlet,Link } from 'react-router-dom';
import RTable from '../components/RTable';
import SideForm from '../components/SideForm';

export default function Dashboard() {

 
  return (
    <Box>
    <CssBaseline />
    <Toolbar />
    <Container className='fluid mt-10'>
    <SideForm />
    <RTable />
    </Container>
    
    <Outlet/>
    
    </Box>
    
    );
  }
