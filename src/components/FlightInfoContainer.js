import { useMemo } from "react";
import "./FlightInfoContainer.css";

const FlightInfoContainer = ({
  airlineLogoUrl,
  airlineName,
  departureTime,
  flightDuration,
  flightStopDuration,
  arrivalTime,
  flightPrice,
  propTransform,
  propTextAlign,
  propRight,
  propLeft,
}) => {
  const turkishIconStyle = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  const singaporeAirlinesStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const flightIconStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div className="flight-card">
      <div className="airline-section">
        <img
          className="turkish-icon"
          alt=""
          src={airlineLogoUrl}
          style={turkishIconStyle}
        />
        <div className="singapore-airlines" style={singaporeAirlinesStyle}>
          {airlineName}
        </div>
      </div>
      <div className="flight-details-section">
        <div className="departure-details1">
          <div className="am">{departureTime}</div>
          <div className="sin1">SIN</div>
        </div>
        <div className="flightduration">
          <img
            className="flighticon"
            alt=""
            src={flightDuration}
            style={flightIconStyle}
          />
          <div className="h-55m-non-stop">{flightStopDuration}</div>
        </div>
        <div className="arrival-details">
          <div className="am">{arrivalTime}</div>
          <div className="sin2">LAX</div>
        </div>
      </div>
      <div className="price-section">
        <img className="price-section-child" alt="" src="../vector-1.svg" />
        <b className="s-730">{flightPrice}</b>
      </div>
    </div>
  );
};

export default FlightInfoContainer;
