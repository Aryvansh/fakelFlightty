import BookingOptionsCard from "../components/BookingOptionsCard";
import "./SearchFilterContainer.css";

const SearchFilterContainer = () => {
  return (
    <div className="search-filters">
      <div className="results-summary">
        <div className="results2">10 out of 177 Results</div>
        <img className="results-summary-child" alt="" src="../vector-2.svg" />
      </div>
      <BookingOptionsCard
        bookingOptionsText="Booking Options"
        propTop="231.4px"
        propWidth="221px"
        propWidth1="189.03px"
      />
      <BookingOptionsCard
        bookingOptionsText="Flight Experience"
        propTop="376.6px"
        propWidth="310.8px"
        propWidth1="198.04px"
      />
      <BookingOptionsCard
        bookingOptionsText="Airlines"
        propTop="561px"
        propWidth="181px"
        propWidth1="87.77px"
      />
      <BookingOptionsCard
        bookingOptionsText="Stops"
        propTop="86.2px"
        propWidth="296.62px"
        propWidth1="65.26px"
      />
      <img className="seperator-icon" alt="" src="../vector-5.svg" />
    </div>
  );
};

export default SearchFilterContainer;
