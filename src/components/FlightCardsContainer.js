import FlightInfoContainer from "../components/FlightInfoContainer";
import FlightContainer from "../components/FlightContainer";
import "./FlightCardsContainer.css";

const FlightCardsContainer = () => {
  return (
    <div className="flight-cards">
      <FlightInfoContainer
        airlineLogoUrl="../turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="../flighticon.svg"
        flightStopDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
        propTextAlign="left"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightContainer
        airlineLogoUrl="../sia.svg"
        airlineName="Singapore Airlines"
        departureTime="8:45 PM"
        flightDuration="15H 10M, 2-stops"
        arrivalTime="7:55 PM"
        flightPrice="S$ 900"
        propTextAlign="center"
        propWidth="140px"
        propFlexShrink="0"
      />
      <FlightInfoContainer
        airlineLogoUrl="../japan.svg"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightDuration="../flighticon1.svg"
        flightStopDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
        propRight="6.33%"
        propLeft="5.15%"
      />
      <FlightInfoContainer
        airlineLogoUrl="../ana.svg"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightDuration="../flighticon1.svg"
        flightStopDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="scale(0.8)"
      />
      <FlightInfoContainer
        airlineLogoUrl="../americanairlines.svg"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightDuration="../flighticon1.svg"
        flightStopDuration="17H 30M, 1-stop"
        arrivalTime="9:50 AM"
        flightPrice="S$ 939"
        propTextAlign="center"
      />
      <FlightContainer
        airlineLogoUrl="../turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 2-stops"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
        propTextAlign="left"
        propWidth="unset"
        propFlexShrink="unset"
      />
      <FlightInfoContainer
        airlineLogoUrl="../japan1.svg"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightDuration="../flighticon1.svg"
        flightStopDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <FlightInfoContainer
        airlineLogoUrl="../americanairlines1.svg"
        airlineName="American Airlines"
        departureTime="10:25 PM"
        flightDuration="../flighticon1.svg"
        flightStopDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTextAlign="center"
      />
      <button className="primary-button">
        <div className="primary-button-child" />
        <div className="search-flights3">Show more results</div>
      </button>
    </div>
  );
};

export default FlightCardsContainer;
