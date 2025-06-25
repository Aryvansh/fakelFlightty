import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UpcomingFlightContainer.css";

const UpcomingFlightContainer = () => {
  const navigate = useNavigate();

  const onHotelClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className="upcoming-flight-section">
      <b className="upcoming-flight">Upcoming Flight</b>
      <div className="flight-details">
        <div className="flight-main-container">
          <div className="to-and-from">
            <div className="from-details">
              <b className="sin">SIN</b>
              <div className="singapore">Singapore</div>
            </div>
            <div className="duration">
              <b className="h-55m">15H 55M</b>
              <img className="flight-icons" alt="" src="../flight-icons.svg" />
            </div>
            <div className="to-details">
              <b className="lax">LAX</b>
              <div className="los-angeles">Los Angeles</div>
            </div>
          </div>
          <div className="horizontal-line" />
          <div className="departure-details">
            <div className="departs-on-1">Departs on: 1 May, 08:00 AM</div>
            <div className="days-to-go-container">
              <b>4 days</b>
              <span> to go</span>
            </div>
          </div>
        </div>
        <div className="line-separator" />
        <div className="prepare-menu">
          <div className="prepare-for-your">Prepare for your trip</div>
          <div className="trip-menus">
            <button className="hotel" onClick={onHotelClick}>
              <img className="hotel-icon" alt="" src="../hotel-icon.svg" />
              <div className="hotel1">Hotel</div>
            </button>
            <button className="hotel">
              <div className="hotel-icon">
                <div className="background" />
                <img className="ticket-icon" alt="" src="../ticket.svg" />
              </div>
              <div className="attractions1">Attractions</div>
            </button>
            <button className="hotel">
              <img className="hotel-icon" alt="" src="../eats-icon.svg" />
              <div className="attractions1">Eats</div>
            </button>
            <button className="hotel">
              <div className="hotel-icon">
                <div className="background1" />
                <img className="train-icon" alt="" src="../vector4.svg" />
              </div>
              <div className="attractions1">Commute</div>
            </button>
            <button className="hotel">
              <div className="taxi-icon">
                <div className="background2" />
                <img className="taxi-icon1" alt="" src="../vector5.svg" />
              </div>
              <div className="taxi1">Taxi</div>
            </button>
            <button className="hotel">
              <div className="hotel-icon">
                <div className="background3" />
                <img className="movie-icon" alt="" src="../vector6.svg" />
              </div>
              <div className="attractions1">Movies</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlightContainer;
