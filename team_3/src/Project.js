import React, { useState } from 'react';
import HWSetCheckInOut from './HWSetCheckInOut';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function Project(props) {
  
  const [JoinOrLeave, setJoinOrLeave] = useState('Join');
  const [color, setColor] = useState('white');
  const [disabledOrEnabled, setdisabledOrEnabled] = useState(true);


  var HWItems1 = [
    1, 
    200, 
    disabledOrEnabled,
];

var HWItems2 = [
  2, 
  200, 
  disabledOrEnabled,
];

  
  const handleJoin = () => {
    if(JoinOrLeave === 'Join'){
        setJoinOrLeave('Leave');
        setColor('lightgreen');
        setdisabledOrEnabled(false);
        
    }
    else{
        setJoinOrLeave('Join')
        setColor('white');
        setdisabledOrEnabled(true);
    }
  }

  return (   
    <div className="Project"> 
        <Box sx={{ flexGrow: 1, border: '2px solid grey'}} bgcolor={color} width={1400} justifyContent="center" alignItems="center">      
            <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item xs={1.6}>
                    <b>{props.ProjectItems[0]}</b>
                </Grid>
                <Grid item xs={1.8}>
                    {props.ProjectItems[1]}
                </Grid>
                <Grid item xs={7.5}>
                    <HWSetCheckInOut label= "Set1" HWItems = { HWItems1 }/>
                    <HWSetCheckInOut label= "Set2" HWItems = { HWItems2 }/>
                </Grid>
                <Grid item xs={1}>
                <Button variant="contained" onClick={handleJoin} size="large"> 
                    {JoinOrLeave}   
                </Button>
                </Grid>
            </Grid>
        </Box>
    </div> 
  );
}

export default Project;