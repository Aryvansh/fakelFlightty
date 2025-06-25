import "./HotelCardContainer.css";

const HotelCardContainer = ({
  bungalowImageUrl,
  roomType,
  hotelName,
  roomPrice,
  videoUrl,
  reviewCount,
  reviewRating,
  vectorImageUrl,
  openMatterhornPopup,
}) => {
  return (
    <div className="hotel-card-1">
      <div className="hotel-card">
        <img
          className="matterhorn-suites-image"
          alt=""
          src={bungalowImageUrl}
        />
        <div className="stay-details">
          <div className="stay-details-rows">
            <div className="entire-bungalow">{roomType}</div>
            <b className="matterhorn-suites">{hotelName}</b>
            <div className="night2">{roomPrice}</div>
          </div>
          <img
            className="video-icon1"
            alt=""
            src={videoUrl}
            onClick={openMatterhornPopup}
          />
        </div>
        <div className="rating">
          <div className="reviews2">{reviewCount}</div>
          <div className="parent">
            <div className="div4">{reviewRating}</div>
            <img className="vector-icon2" alt="" src={vectorImageUrl} />
          </div>
        </div>
        <div className="more-details-button">
          <div className="button3">More details</div>
        </div>
      </div>
    </div>
  );
};

export default HotelCardContainer;
