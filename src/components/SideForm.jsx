/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { createData } from './RTable';

import { TextField, Toolbar } from '@mui/material';

export default function SideForm(props) {
  const [state, setState] = React.useState({
    right: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newjob = createData(
        props.jobs.length+1,
        data.get('Job_Title'),
        data.get('Experience_Range'),
        data.get('Salary_Range'),
        data.get('Job_Priority'),
        data.get('Posted_on'),
        data.get('Status'), 
        data.get('City'),
        data.get('State')
    )
    props.setJobs([...props.jobs,newjob])
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      component='form'
      onSubmit={handleSubmit}
    >
      
      <Toolbar />
       
      <TextField
              margin="normal"
              required
              sx={{marginLeft:"1rem"}}
              id="Job_Title"
              label="Job Title"
              name="Job_Title"
              autoFocus
            />
      <TextField
              margin="normal"
              required
              sx={{marginLeft:"1rem"}}
              id="Experience_Range"
              label="Experience Range"
              name="Experience_Range"
              autoFocus
            />
      <TextField
              margin="normal"
              required
              sx={{marginLeft:"1rem"}}
              id="Salary_Range"
              label="Salary Range"
              name="Salary_Range"
              autoFocus
            />
      <TextField
              margin="normal"
              required
              sx={{marginLeft:"1rem"}}
              id="Job_Priority"
              label="Job Priority"
              name="Job_Priority"
              autoFocus
            />
      <TextField
              margin="normal"
              required
              sx={{marginLeft:"1rem"}}
              id="Posted_on"
              label="Posted on"
              name="Posted_on"
              autoFocus
            />
      <TextField
              margin="normal"
              required
              sx={{marginLeft:"1rem"}}
              id="Status"
              label="Status"
              name="Status"
              autoFocus
            />
      <TextField
              margin="normal"
              required
              sx={{marginLeft:"1rem"}}
              id="City"
              label="City"
              name="City"
              autoFocus
            />
      <TextField
              margin="normal"
              required
              sx={{marginLeft:"1rem"}}
              id="State"
              label="State"
              name="State"
              autoFocus
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ m:3,display:"block"}}
              onClick={toggleDrawer("right",false)}
            >
              Create Job
            </Button>
      
    </Box>
  );

  return (
    <div className='float-end m-2'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Create Job</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
