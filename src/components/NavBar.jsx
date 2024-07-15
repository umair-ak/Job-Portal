import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar,Toolbar,Typography } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
  primary: {
    main: blueGrey[500],
  },
  secondary: {
    main: blueGrey[700],
  },
}});

export default function NavBar() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
      
    <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Job Portal
          </Typography>
        </Toolbar>
      </AppBar>
      
       </ThemeProvider>
    
  )
}
