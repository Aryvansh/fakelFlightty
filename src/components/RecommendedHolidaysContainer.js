import RecommendedHolidayCard from "../components/RecommendedHolidayCard";
import "./RecommendedHolidaysContainer.css";

const RecommendedHolidaysContainer = () => {
  return (
    <div className="recommended-holidays-container">
      <div className="rec-title">
        <b className="recommended-holidays">Recommended Holidays</b>
        <button className="view-all-holidays-parent">
          <div className="view-all-holidays">View all holidays</div>
          <img className="arrow-right-icon2" alt="" src="../arrowright2.svg" />
        </button>
      </div>
      <div className="rec-cards-container">
        <RecommendedHolidayCard
          destinationImageUrl="../unsplash5mv818tzxeo@2x.png"
          destinationName="Bali"
          packageDuration="4D3N"
          packagePrice="$899"
        />
        <RecommendedHolidayCard
          destinationImageUrl="../switzerlandimage@2x.png"
          destinationName="Swiss"
          packageDuration="6D5N"
          packagePrice="$900"
        />
        <RecommendedHolidayCard
          destinationImageUrl="../boracayimage@2x.png"
          destinationName="Boracay"
          packageDuration="5D4N"
          packagePrice="$699"
        />
        <RecommendedHolidayCard
          destinationImageUrl="../palawanimage@2x.png"
          destinationName="Palawan"
          packageDuration="4D3N"
          packagePrice="$789"
        />
      </div>
      <div className="view-all-bottom1">
        <div className="view-all-holidays1">View all holidays</div>
        <img className="arrow-right-icon2" alt="" src="../arrowright3.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
