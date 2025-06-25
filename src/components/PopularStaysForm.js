import { useState, useCallback } from "react";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "../components/HotelCardContainer";
import HotelContainer2 from "../components/HotelContainer2";
import "./PopularStaysForm.css";

const PopularStaysForm = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const navigate = useNavigate();

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

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <>
      <form className="popular-stays">
        <div className="popular-stays-header">
          <div className="popular-stays-title">
            <b className="popular-stays1">Popular Stays</b>
          </div>
          <button
            className="view-all-stays-button"
            onClick={onViewAllStaysButtonClick}
          >
            <div className="view-all-stays">View all stays</div>
            <img
              className="arrow-right-icon4"
              alt=""
              src="../arrowright2.svg"
            />
          </button>
        </div>
        <div className="hotel-cards">
          <HotelCardContainer
            bungalowImageUrl="../unsplashrlwe8f8anoc@2x.png"
            roomType="Entire bungalow"
            hotelName="Matterhorn Suites"
            roomPrice="$575/night"
            videoUrl="../video2.svg"
            reviewCount="(60 reviews)"
            reviewRating="4.9"
            vectorImageUrl="../vector7.svg"
            openMatterhornPopup={openMatterhornPopup}
          />
          <HotelContainer2
            hotelImageUrl="../unsplashtsn8bpopveo@2x.png"
            hotelName="2-Story beachfront suite"
            hotelPrice="Discovery Shores"
            hotelReviews="$360/night"
            hotelRating="(116 reviews)"
            hotelRating1="4.8"
            hotelRatingImageUrl1="../vector8.svg"
            propWidth="37.54%"
            propRight="62.46%"
          />
          <HotelContainer2
            hotelImageUrl="../unsplashrlwe8f8anoc1@2x.png"
            hotelName="Single deluxe hut"
            hotelPrice="Arctic Hut "
            hotelReviews="$420/night"
            hotelRating="(78 reviews)"
            hotelRating1="4.7"
            hotelRatingImageUrl1="../vector9.svg"
            propWidth="37.58%"
            propRight="62.42%"
          />
          <HotelCardContainer
            bungalowImageUrl="../unsplashyqrybvxug5q@2x.png"
            roomType="Deluxe King Room"
            hotelName="Lake Louise Inn"
            roomPrice="$244/night"
            videoUrl="../video3.svg"
            reviewCount="(63 reviews)"
            reviewRating="4.6"
            vectorImageUrl="../vector10.svg"
            openMatterhornPopup={openMatterhornPopup1}
          />
        </div>
        <div className="mobile-view-all-stays">
          <div className="view-all-stays1">View all stays</div>
          <img className="arrow-right-icon4" alt="" src="../arrowright5.svg" />
        </div>
      </form>
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

export default PopularStaysForm;
