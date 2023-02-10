import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Payment({ setCardInfo, cardInfo }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom mt={5}>
        Ödeme Türü
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cardName"
            label="Kart Sahibi"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardInfo.name}
            onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cardNumber"
            label="Kart Numarası"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardInfo.number}
            onChange={(e) =>
              setCardInfo({ ...cardInfo, number: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="expDate"
            label="Son Kullanma Tarihi"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={cardInfo.date}
            onChange={(e) => setCardInfo({ ...cardInfo, date: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cardInfo.cvv}
            onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Hatırla"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
