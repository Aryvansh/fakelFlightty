import { useMemo } from "react";
import "./FlightContainer.css";

const FlightContainer = ({
  airlineLogoUrl,
  airlineName,
  departureTime,
  flightDuration,
  arrivalTime,
  flightPrice,
  propTextAlign,
  propWidth,
  propFlexShrink,
}) => {
  const singaporeAirlines1Style = useMemo(() => {
    return {
      textAlign: propTextAlign,
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propTextAlign, propWidth, propFlexShrink]);

  return (
    <div className="flight-card1">
      <div className="airline-section1">
        <img className="sia-icon" alt="" src={airlineLogoUrl} />
        <div className="singapore-airlines1" style={singaporeAirlines1Style}>
          {airlineName}
        </div>
      </div>
      <div className="flight-details-section1">
        <div className="departure-details2">
          <div className="am2">{departureTime}</div>
          <div className="sin3">SIN</div>
        </div>
        <div className="flightduration1">
          <img className="flighticon1" alt="" src="../flighticon1.svg" />
          <div className="h-55m-non-stop1">{flightDuration}</div>
        </div>
        <div className="arrival-details1">
          <div className="am2">{arrivalTime}</div>
          <div className="sin4">LAX</div>
        </div>
      </div>
      <div className="price-section1">
        <img className="price-section-item" alt="" src="../vector-1.svg" />
        <b className="s-7301">{flightPrice}</b>
      </div>
    </div>
  );
};

export default FlightContainer;
