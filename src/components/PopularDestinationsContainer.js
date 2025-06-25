import DestinationCard from "../components/DestinationCard";
import "./PopularDestinationsContainer.css";

const PopularDestinationsContainer = () => {
  return (
    <div className="pop-destinations-main">
      <div className="destinations-titles">
        <div className="title-container">
          <b className="plan-your-next">Plan your next trip</b>
          <b className="most-popular-destinations">Most Popular Destinations</b>
        </div>
        <button className="view-all-top">
          <div className="view-all-destinations">View all destinations</div>
          <img className="arrow-right-icon" alt="" src="../arrowright.svg" />
        </button>
      </div>
      <div className="cards-container">
        <DestinationCard
          destinationImageUrl="../parisimage@2x.png"
          destinationName="Paris"
          destinationPrice="$699"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
        />
        <DestinationCard
          destinationImageUrl="../greeceimage@2x.png"
          destinationName="Greece"
          destinationPrice="$1079"
          propWidth="99.92px"
          propDisplay="unset"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <DestinationCard
          destinationImageUrl="../norwayimage@2x.png"
          destinationName="Norway"
          destinationPrice="$895"
        />
        <DestinationCard
          destinationImageUrl="../tuscanyimage@2x.png"
          destinationName="Tuscany"
          destinationPrice="$1245"
          propWidth="100.62px"
          propWidth1="100.62px"
          propLeft="48.09px"
        />
      </div>
      <div className="view-all-bottom">
        <div className="view-all-destinations1">View all destinations</div>
        <img className="arrow-right-icon" alt="" src="../arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
