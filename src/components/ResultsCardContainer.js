import "./ResultsCardContainer.css";

const ResultsCardContainer = ({
  hotelImageUrl,
  roomType,
  hotelName,
  roomImageUrl,
  videoUrl,
  openMatterhornPopup,
}) => {
  return (
    <div className="results-card">
      <img className="results-image-icon" alt="" src={hotelImageUrl} />
      <div className="results-details">
        <div className="results-title">
          <div className="result-and-video">
            <div className="king-bed-standard">{roomType}</div>
            <b className="holiday-inn-expre">{hotelName}</b>
            <div className="review">
              <div className="reviews">(1,136 reviews)</div>
              <div className="stars">
                <div className="div">4.7</div>
                <img className="vector-icon" alt="" src={roomImageUrl} />
              </div>
            </div>
          </div>
          <img
            className="video-icon"
            alt=""
            src={videoUrl}
            onClick={openMatterhornPopup}
          />
        </div>
        <div className="price-and-cta">
          <div className="pricing">
            <b className="s-286">$S 286</b>
            <div className="night">/night</div>
          </div>
          <button className="view-details-button">
            <div className="view-details-button-child" />
            <div className="search-flights">View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCardContainer;
