import { useState, useCallback } from "react";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import ResultsCardContainer from "../components/ResultsCardContainer";
import ResultsContainer from "../components/ResultsContainer";
import "./HotelResultsContainer.css";

const HotelResultsContainer = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className="hotel-results">
        <div className="results-sumamry">
          <div className="results">200+ results</div>
          <div className="filters">
            <img className="filters-icon" alt="" src="../filters.svg" />
            <div className="filters1">Filters</div>
          </div>
        </div>
        <div className="results-section">
          <div className="result-cards-col">
            <ResultsCardContainer
              hotelImageUrl="../unsplashs6ch7n3eoqy@2x.png"
              roomType="1 king bed standard"
              hotelName="Holiday Inn Expre..."
              roomImageUrl="../vector.svg"
              videoUrl="../video.svg"
              openMatterhornPopup={openMatterhornPopup}
            />
            <ResultsContainer
              hotelImageUrl="../unsplashs6ch7n3eoqy1@2x.png"
              hotelName="Freehand Los Angeles"
              roomType="Bed in Quad"
              hotelReviews="(1,941 reviews)"
              hotelRating="4.2"
              hotelVectorUrl="../vector1.svg"
              roomPrice="$S 198"
            />
            <ResultsContainer
              hotelImageUrl="../unsplashs6ch7n3eoqy2@2x.png"
              hotelName="The Westin Bonavent..."
              roomType="1 King, City view"
              hotelReviews="(1,002 reviews)"
              hotelRating="4.1"
              hotelVectorUrl="../vector2.svg"
              roomPrice="$S 289"
            />
            <ResultsCardContainer
              hotelImageUrl="../unsplashs6ch7n3eoqy3@2x.png"
              roomType="Deluxe King"
              hotelName="The Ritz-Carlton, L..."
              roomImageUrl="../vector3.svg"
              videoUrl="../video1.svg"
              openMatterhornPopup={openMatterhornPopup1}
            />
            <iframe
              className="map"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
          <iframe
            className="map1"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelResultsContainer;
