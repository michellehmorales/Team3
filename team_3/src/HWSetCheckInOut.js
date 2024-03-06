//import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';

//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';



function HWSetCheckInOut(props) {
  
    const [inputValue, setInputValue] = useState(0);
    const [availabilityValue, setAvailabilityValue] = useState(parseInt(props.HWItems[1]));
    var availability = 0;

    /**
   * Event handler for input change.
   * Updates the input value state with the new value entered by the user.
   * @param {object} event - The event object.
   */
  const handleInputChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, "")
    setInputValue(numericValue);
  }

  const handleCheckIn = () => {
    availability = availabilityValue + parseInt(inputValue);
    if(availability > 200){
        setAvailabilityValue(200);
    }
    else{
        setAvailabilityValue(availability);
    }
    
  }

  const handleCheckOut = () => {
    availability = availabilityValue - parseInt(inputValue);
    if(availability < 0){
        setAvailabilityValue(0);
    }
    else{
        setAvailabilityValue(availability);
    }
  }

    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      key = {props.HWItems[2]}
    >
      <text> 
        HWSet{props.HWItems[0]}: {availabilityValue}/{props.HWItems[1]} 
        </text>  
      <TextField id="outlined-text-field" size="small" label="Enter qty" variant="outlined" value={inputValue} onChange={handleInputChange}/>
      <Button variant="contained" onClick={handleCheckIn} disabled = {props.HWItems[2]}>
            Check In    
        </Button>
      <Button variant="contained" onClick={handleCheckOut} disabled = {props.HWItems[2]}>
        Check Out
        </Button>
    </Box>
  );
}

export default HWSetCheckInOut;