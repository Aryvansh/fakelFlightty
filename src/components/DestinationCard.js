import { useMemo } from "react";
import "./DestinationCard.css";

const DestinationCard = ({
  destinationImageUrl,
  destinationName,
  destinationPrice,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  const detailsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="col-1">
      <div className="pariscard">
        <img className="parisimage-icon" alt="" src={destinationImageUrl} />
        <div className="destination-details">
          <b className="paris">{destinationName}</b>
          <div className="details" style={detailsStyle}>
            <div className="div2" style={divStyle}>
              {destinationPrice}
            </div>
            <div className="from" style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DestinationCard;
