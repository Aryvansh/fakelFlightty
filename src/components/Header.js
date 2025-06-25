import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <header className="top-header1">
      <div className="top-container1">
        <div
          className="fickleflight-logo1"
          onClick={onFickleflightLogoContainerClick}
        >
          <div className="symbols">
            <img
              className="web-screen-icon"
              alt=""
              src="../webscreen.svg"
              onClick={onWebScreenClick}
            />
          </div>
        </div>
        <div className="navigation-right1">
          <div className="navigation-menu1">
            <div className="explore1" onClick={onExploreTextClick}>
              Explore
            </div>
            <div className="explore1" onClick={onSearchTextClick}>
              Search
            </div>
            <button className="hotels1">Hotels</button>
            <button className="offers1">Offers</button>
          </div>
          <div className="account-section1">
            <img
              className="hamburger-menu-icon1"
              alt=""
              src="../notification.svg"
            />
            <img
              className="notification-bell-icon1"
              alt=""
              src="../notification1.svg"
            />
            <img
              className="unsplashd1upkifd04a-icon1"
              alt=""
              src="../top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
