import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormContainer from "../components/SearchFormContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightCardsContainer from "../components/FlightCardsContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import "./ResultsPage.css";

const ResultsPage = () => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className="results-page">
      <header className="top-header">
        <div className="top-container">
          <button
            className="fickleflight-logo"
            onClick={onFickleflightLogoClick}
          >
            <img className="symbols-icon" alt="" src="../symbols1.svg" />
          </button>
          <div className="navigation-right">
            <div className="navigation-menu">
              <div className="explore" onClick={onExploreTextClick}>
                Explore
              </div>
              <button className="search">Search</button>
              <div className="explore" onClick={onHotelsTextClick}>
                Hotels
              </div>
              <button className="offers">Offers</button>
            </div>
            <div className="account-section">
              <img
                className="hamburger-menu-icon"
                alt=""
                src="../notification.svg"
              />
              <img
                className="notification-bell-icon"
                alt=""
                src="../notification1.svg"
              />
              <img
                className="unsplashd1upkifd04a-icon"
                alt=""
                src="../top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <SearchFormContainer />
      <div className="search-results">
        <SearchFilterContainer />
        <FlightCardsContainer />
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
