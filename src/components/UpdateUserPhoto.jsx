import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useUser } from "../context/UserProvider";
function UpdateUserPhoto() {
  return (
    <div>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 5, width: '25ch', borderRadius: 5},
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="standard-required"
        label="Ad"
        defaultValue=""
        variant="standard"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
    </div>
  </Box>
    </div>
  )
}

export default UpdateUserPhoto