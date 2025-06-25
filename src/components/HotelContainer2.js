import { useMemo } from "react";
import "./HotelContainer2.css";

const HotelContainer2 = ({
  hotelImageUrl,
  hotelName,
  hotelPrice,
  hotelReviews,
  hotelRating,
  hotelRating1,
  hotelRatingImageUrl1,
  propWidth,
  propRight,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className="hotel-card-2">
      <div className="hotel-card1">
        <img className="discovery-shores-image" alt="" src={hotelImageUrl} />
        <div className="stay-details1">
          <div className="stay-details-rows1">
            <div className="story-beachfront-suite">{hotelName}</div>
            <b className="discovery-shores">{hotelPrice}</b>
            <div className="night3">{hotelReviews}</div>
          </div>
        </div>
        <div className="rating1">
          <div className="reviews3">{hotelRating}</div>
          <div className="group">
            <div className="div5">{hotelRating1}</div>
            <img
              className="vector-icon3"
              alt=""
              src={hotelRatingImageUrl1}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <div className="more-details-button1">
          <div className="button4">More details</div>
        </div>
      </div>
    </div>
  );
};

export default HotelContainer2;
