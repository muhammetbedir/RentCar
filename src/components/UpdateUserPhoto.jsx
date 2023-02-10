import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useUser } from "../context/UserProvider";
function UpdateUserPhoto() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 5, width: "25ch", borderRadius: 5 },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            required
            id="standard-required"
            label="Foto Path"
            defaultValue=""
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
}

export default UpdateUserPhoto;
