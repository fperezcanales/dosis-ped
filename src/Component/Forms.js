import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputAdornment } from '@mui/material';

export default function Forms() {
  return (
    <React.Fragment>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="peso"
            name="peso"
            label="Peso"
            fullWidth
            // autoComplete="given-name"
            focused
            variant="standard"
            type='number'
            InputProps={{
                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dosis"
            name="dosis"
            label="Dosis"
            fullWidth
            //autoComplete="family-name"
            variant="standard"
            type='number'
            InputProps={{
                endAdornment: <InputAdornment position="start"> (mg / kg / dosis)</InputAdornment>,
            }}
          />
        </Grid>


        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="presentacion1"
            name="presentacion1"
            label="Presentación"
            fullWidth
            // autoComplete="given-name"
            
            variant="standard"
            type='number'
            InputProps={{
                endAdornment: <InputAdornment position="start"> mg</InputAdornment>,
            }}
          />
        </Grid>

        <Grid item xs={6} sm={6} >
          <TextField
            required
            id="presentacion2"
            name="presentacion2"
            label="/"
            fullWidth
            //autoComplete="family-name"
            variant="standard"
            type='number'
            InputProps={{
                endAdornment: <InputAdornment position="start"> mL</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}