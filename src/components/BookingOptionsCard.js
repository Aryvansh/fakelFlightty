import { useMemo } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import "./BookingOptionsCard.css";

const BookingOptionsCard = ({
  bookingOptionsText,
  propTop,
  propWidth,
  propWidth1,
}) => {
  const bookingOptionsStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  const resultsStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="booking-options" style={bookingOptionsStyle}>
      <b className="results1" style={resultsStyle}>
        {bookingOptionsText}
      </b>
      <FormControlLabel
        className="component-1formcheckbox"
        label="Book on Fickleflight"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
      <FormControlLabel
        className="component-1formcheckbox1"
        label="Official Airline Websites"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
    </div>
  );
};

export default BookingOptionsCard;
