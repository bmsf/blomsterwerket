import React from "react";
import {
  // InputLabel,
  // Select,
  // MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from 'react-router-dom';
import FormInput from "./CustomTextField";

const AddressForm = ( test ) => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Leveringsadresse
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test(data))}>
          <Grid container spacing={3}>
            <FormInput required name="fornavn" label="Fornavn" />
            <FormInput required name="etternavn" label="Etternavn" />
            <FormInput required name="epost" label="E-post" />
            <FormInput required name="gateVei" label="Gate / vei" />
            <FormInput required name="postNummer" label="Postnummer" />
            <FormInput required name="postSted" label="Poststed" />
            <FormInput name="coAdresse" label="C/O adresse(valgfritt)" />
          </Grid>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} to="/cart" variant="outlined">Back to cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
