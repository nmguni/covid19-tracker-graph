import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./countryPicker.module.scss";
import { fetchcountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchcountries());
    };

    fetchAPI();
  }, [setFetchCountries]);

  return (
    <FormControl style={{ margin: "1rem" }} className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
