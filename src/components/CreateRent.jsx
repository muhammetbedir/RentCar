import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddBoxIcon from "@mui/icons-material/AddBox";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useUser } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
function CreateRent() {
  const { isLoggedin } = useUser();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const redirectToSignIn = () => {
    !isLoggedin && navigate("login");
  };
  return (
    <div className="addContainer">
      <Popup
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          padding: "40px 30px",
          borderRadius: "1rem",
          height: "80vh",
          overflow: "auto",
        }}
        trigger={
          <div className="btnContainer">
            <button className="addBtn" onClick={redirectToSignIn}>
              <AddBoxIcon />
            </button>
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <React.Fragment>
            <Grid container spacing={3}>
              <Typography variant="h6" gutterBottom>
                İlan Oluşturun
              </Typography>
              <Grid item xs={12} sm={12}>
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
              <Grid item xs={12} sm={12}>
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
              <Grid item xs={12} sm={12}>
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
                    // value={category}
                    // onChange={(e) => setCategory(e.target.value)}
                    label=" Araç Kapasitesi"
                  >
                    <MenuItem value="">
                      <em>Hiçbiri</em>
                    </MenuItem>
                    {category === "Araba" && (
                      <>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                        <MenuItem value={"4"}>4</MenuItem>
                        <MenuItem value={"5"}>5</MenuItem>
                      </>
                    )}
                    {category === "Bisiklet" && (
                      <>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                      </>
                    )}
                    {category === "Motorsiklet" && (
                      <>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                      </>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="fiyat"
                  name="fiyat"
                  label="Günlük Fiyat"
                  fullWidth
                  autoComplete=""
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="resim"
                  name="resim"
                  label="Resim1"
                  fullWidth
                  autoComplete=""
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="resim"
                  name="resim"
                  label="Resim2"
                  fullWidth
                  autoComplete=""
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="resim"
                  name="resim"
                  label="Resim3"
                  fullWidth
                  autoComplete=""
                  variant="standard"
                />
              </Grid>
              <div className="createRentDateContainer">
                <h4>Tarih Seçiniz:</h4>
                <DatePicker
                  className="createRentDate"
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                  selectsRange
                  // inline
                />
              </div>
              <Grid item xs={12} sm={12}>
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
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="İlçe"
                  fullWidth
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
