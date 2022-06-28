import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Alert, Box, Button, Dialog, DialogContent, DialogTitle, InputAdornment } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormularioSchema = Yup.object().shape({
  peso: Yup.number()
    .min(1, 'Debe ingresar peso en Kg').max(50, '¿Más de 50 kg?').required('Obligatorio'),
  dosis: Yup.number()
    .min(1, 'Debe ingresar dosis').max(1000, '¿Más de 1000 mg?').required('Obligatorio'),
  presentacion1: Yup.number()
    .min(1, 'Debe ingresar mG').max(1000, '¿Más de 1000 mG?').required('Obligatorio'),
  presentacion2: Yup.number()
    .min(1, 'Debe ingresar mL').max(1000, '¿Más de 1000 mL?').required('Obligatorio'),
});

export default function Forms() {

  const [resultado, setResultado] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };


  return (
    <Formik
      initialValues={{
        peso: 0,
        dosis: 0,
        presentacion1: 0,
        presentacion2: 0
      }}
      validationSchema={FormularioSchema}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        //alert(JSON.stringify(values, null, 2));
        setSubmitting(false);

        const {
          peso,
          dosis,
          presentacion1,
          presentacion2,
        } = values;

        const x = (((peso * dosis) * presentacion2) / presentacion1).toFixed(1);
        setResultado(`Resultado: ${x} ML.`)
        handleClickOpen()
        //}, 400);
      }}
    >

      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm
        /* and other goodies */
      }) => (


        <form onSubmit={handleSubmit}>

          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Resultado</DialogTitle>
            <DialogContent>
              <Alert>
                {resultado}
              </Alert>
            </DialogContent>

          </Dialog>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="peso"
                name="peso"
                label="Peso"
                fullWidth

                onChange={handleChange}
                onBlur={handleBlur}
                value={values.peso}

                focused
                variant="standard"
                type='number'
                InputProps={{
                  startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                }}
                helperText={errors.peso && touched.peso ? errors.peso : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="dosis"
                name="dosis"
                label="Dosis"
                fullWidth

                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dosis}

                variant="standard"
                type='number'
                InputProps={{
                  endAdornment: <InputAdornment position="start"> (mg / kg / dosis)</InputAdornment>,
                }}
                helperText={errors.dosis && touched.dosis ? errors.dosis : ''}
              />
            </Grid>


            <Grid item xs={6} sm={6}>
              <TextField
                required
                id="presentacion1"
                name="presentacion1"
                label="Presentación"
                fullWidth

                onChange={handleChange}
                onBlur={handleBlur}
                value={values.presentacion1}

                variant="standard"
                type='number'
                InputProps={{
                  endAdornment: <InputAdornment position="start"> mg</InputAdornment>,
                }}
                helperText={errors.presentacion1 && touched.presentacion1 ? errors.presentacion1 : ''}
              />
            </Grid>

            <Grid item xs={6} sm={6} >
              <TextField
                required
                id="presentacion2"
                name="presentacion2"
                label="/"
                fullWidth

                onChange={handleChange}
                onBlur={handleBlur}
                value={values.presentacion2}

                variant="standard"
                type='number'
                InputProps={{
                  endAdornment: <InputAdornment position="start"> mL</InputAdornment>,
                }}
                helperText={errors.presentacion2 && touched.presentacion2 ? errors.presentacion2 : ''}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>

            <Button
              onClick={()=>{
                resetForm()
              }} 
              sx={{ mt: 3, ml: 1 }}
            >
              Limpiar
            </Button>

            <Button
              variant="contained"
              //onClick={handleNext}
              type="submit" disabled={isSubmitting}
              sx={{ mt: 3, ml: 1 }}
            >
              {'Calcular'}
            </Button>
          </Box>
        </form>

      )}

    </Formik>

  );
}