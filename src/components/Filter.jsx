import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FilterListIcon from "@mui/icons-material/FilterList";

import {
  Button,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function Filter() {
  const [category, setCategory] = useState("");
  return (
    <>
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
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FilterListIcon />
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
                    labelId="demo-simple-select-helper-label"
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
                  id="rengi"
                  name="rengi"
                  label="Araç Rengi"
                  fullWidth
                  autoComplete="family-name"
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
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="Maksimum Fiyat"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="Minimum Fiyat"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="İlçe"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
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
                  id="country"
                  name="country"
                  label="Ülke"
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Button
                  type="submit"
                  sx={{ width: "100%", mt: 2 }}
                  variant="contained"
                >
                  Filtrele
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </Popup>
    </>
  );
}

export default Filter;
