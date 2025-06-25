import { useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./SearchFormContainer.css";

const SearchFormContainer = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="search-form-section">
        <div className="search-container1">
          <div className="banner-gradient1" />
          <img
            className="banner-background-icon"
            alt=""
            src="../banner-background1@2x.png"
          />
          <div className="search-section1">
            <div className="title2">
              <div className="where-are-you">Where are you off too?</div>
            </div>
            <div className="search-form1">
              <div className="inputs-row1">
                <div className="input-group3">
                  <Autocomplete
                    className="departure-field"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)Sanya (SYX)",
                    ]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Singapore -  Changi (SIN)"
                    size="medium"
                  />
                </div>
                <div className="input-group3">
                  <Autocomplete
                    className="departure-field"
                    sx={{ width: "100%" }}
                    disablePortal
                    options={[
                      "Clark (CRK)",
                      "Launceston (LST)",
                      "Kalibo (KLO)",
                      "Colombo CMB",
                      "Melbourne (AVV)",
                      "Los Angeles (LA)",
                    ]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Arrival"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Los Angeles (LA)"
                    size="medium"
                  />
                </div>
                <div className="input-group3">
                  <div className="departure-field">
                    <DatePicker
                      label="Date"
                      value={dateFieldDateTimePickerValue}
                      onChange={(newValue) => {
                        setDateFieldDateTimePickerValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          variant="outlined"
                          size="medium"
                          renderInput={{ placeholder: "01/05/2022" }}
                          helperText=""
                          fullWidth
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="button-group1">
                <button className="search-flights-button1">
                  <div className="button5">Search flights</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchFormContainer;
