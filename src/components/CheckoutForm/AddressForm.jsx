import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import FormInput from "./CustomTextField";

const AddressForm = ({ checkoutToken, test, setShippingData, nextStep, }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  // const [shippingSubdivision, setShippingSubdivision] = useState("");
  // const [shippingOptions, setShippingOptions] = useState([]);
  // const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  // const fetchSubdivisions = async (countryCode) => {
  //   const { subdivisions } = await commerce.services.localeListSubdivisions(
  //     countryCode
  //   );

  //   setShippingSubdivisions(subdivisions);
  //   setShippingSubdivision(Object.keys(subdivisions)[0]);
  // };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  },);

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
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivions</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>Select Me</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>Select Me</MenuItem>
              </Select>
            </Grid> */}
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              to="/cart"
              variant="outlined"
              color="primary"
              text="primary"
            >
              Back to cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Neste
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
