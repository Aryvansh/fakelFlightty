import "./ResultsContainer.css";

const ResultsContainer = ({
  hotelImageUrl,
  hotelName,
  roomType,
  hotelReviews,
  hotelRating,
  hotelVectorUrl,
  roomPrice,
}) => {
  return (
    <div className="results-card1">
      <img className="results-image-icon1" alt="" src={hotelImageUrl} />
      <div className="results-details1">
        <div className="results-title1">
          <div className="result">
            <b className="freehand-los-angeles">{hotelName}</b>
            <div className="bed-in-quad">{roomType}</div>
            <div className="review1">
              <div className="reviews1">{hotelReviews}</div>
              <div className="stars1">
                <div className="div1">{hotelRating}</div>
                <img className="vector-icon1" alt="" src={hotelVectorUrl} />
              </div>
            </div>
          </div>
        </div>
        <div className="price-and-cta1">
          <div className="pricing1">
            <b className="s-198">{roomPrice}</b>
            <div className="night1">/night</div>
          </div>
          <button className="view-details-button1">
            <div className="view-details-button-item" />
            <div className="search-flights1">View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
