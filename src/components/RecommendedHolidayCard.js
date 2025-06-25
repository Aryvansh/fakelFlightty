import "./RecommendedHolidayCard.css";

const RecommendedHolidayCard = ({
  destinationImageUrl,
  destinationName,
  packageDuration,
  packagePrice,
}) => {
  return (
    <button className="rec-card-1">
      <img
        className="unsplash5mv818tzxeo-icon"
        alt=""
        src={destinationImageUrl}
      />
      <div className="holiday-details">
        <div className="frame-parent">
          <div className="bali-parent">
            <div className="bali">{destinationName}</div>
            <div className="d3n">{packageDuration}</div>
          </div>
          <div className="div3">{packagePrice}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayCard;
