import { useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import "./HeroContainer.css";

const HeroContainer = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="hero-section">
        <header className="top-header2">
          <div className="top-container2">
            <button className="fickleflight-logo2">
              <img className="symbols-icon1" alt="" src="../symbols.svg" />
            </button>
            <div className="navigation-right2">
              <div className="navigation-menu2">
                <button className="explore2">Explore</button>
                <div className="search2" onClick={onSearchTextClick}>
                  Search
                </div>
                <div className="search2" onClick={onHotelsTextClick}>
                  Hotels
                </div>
                <button className="offers2">Offers</button>
              </div>
              <div className="account-section2">
                <img
                  className="hamburger-menu-icon2"
                  alt=""
                  src="../notification.svg"
                />
                <img
                  className="notification-bell-icon2"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="profile-picture-icon"
                  alt=""
                  src="../top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="search-section">
          <div className="banner-gradient" />
          <img
            className="banner-background1"
            alt=""
            src="../banner--background@2x.png"
          />
          <div className="search-container">
            <div className="title1">
              <div className="lets-explore">{`Let’s explore & travel the world`}</div>
              <div className="find-the-best">
                Find the best destinations and the most popular stays!
              </div>
            </div>
            <div className="search-form">
              <div className="form-title-group">
                <b className="search-flights2">Search flights</b>
                <div className="flight-options">
                  <div className="flight-type">
                    <FormControlLabel
                      className="radio"
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      className="radio1"
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
                  </div>
                </div>
              </div>
              <div className="form-inputs-row">
                <div className="inputs-row">
                  <div className="input-group">
                    <Autocomplete
                      className="selectoutlined"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)",
                        "Sanya (SYX)",
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
                  <div className="input-group">
                    <Autocomplete
                      className="selectoutlined"
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
                  <div className="input-group">
                    <div className="selectoutlined">
                      <DatePicker
                        label="Date"
                        value={selectOutlinedDateTimePickerValue}
                        onChange={(newValue) => {
                          setSelectOutlinedDateTimePickerValue(newValue);
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
                <div className="button-group">
                  <button
                    className="search-flights-button"
                    onClick={onSearchFlightsButtonClick}
                  >
                    <div className="button2">Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
