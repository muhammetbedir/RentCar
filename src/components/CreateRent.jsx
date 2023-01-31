import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddBoxIcon from "@mui/icons-material/AddBox";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import {
  Button,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function CreateRent() {
  const [category, setCategory] = useState("");
  return (
    <div className="addContainer">
      <Popup
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 30px",
          borderRadius: "1rem",
        }}
        trigger={
          <div className="btnContainer">
            <button className="addBtn">
              <AddBoxIcon />
            </button>
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Aracınızı Kiralayın
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="standard"
                  sx={{ mt: 2.15, minWidth: "100%" }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Kategori
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    label="Kategori"
                  >
                    <MenuItem value="">
                      <em>Hiçbiri</em>
                    </MenuItem>
                    <MenuItem value={"Araba"}>Araba</MenuItem>
                    <MenuItem value={"Bisiklet"}>Bisiklet</MenuItem>
                    <MenuItem value={"Motorsiklet"}>Motorsiklet</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="marka"
                  name="marka"
                  label="Araç Markası"
                  fullWidth
                  autoComplete="Marka"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="model"
                  name="model"
                  label="Araç Modeli"
                  fullWidth
                  autoComplete="Marka"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="rengi"
                  name="rengi"
                  label="Araç Rengi"
                  fullWidth
                  autoComplete="color"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="standard"
                  sx={{ mt: 2.15, minWidth: "100%" }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Araç Kapasitesi
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    label=" Araç Kapasitesi"
                  >
                    <MenuItem value="">
                      <em>Hiçbiri</em>
                    </MenuItem>
                    <MenuItem value={"1"}>1</MenuItem>
                    <MenuItem value={"2"}>2</MenuItem>
                    <MenuItem value={"3"}>3</MenuItem>
                    <MenuItem value={"4"}>4</MenuItem>
                    <MenuItem value={"5"}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Adres"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="İlçe"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="Şehir"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Ülke"
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Posta Kodu"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Button
                  type="submit"
                  sx={{ width: "100%", mt: 2 }}
                  variant="contained"
                >
                  Ekle
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </Popup>
    </div>
  );
}

export default CreateRent;
