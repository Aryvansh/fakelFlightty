import { TextField } from "@mui/material";
import "./FooterContainer.css";

const FooterContainer = ({
  sectionImageUrl,
  logoImageUrl,
  socialIconImageUrl,
}) => {
  return (
    <div className="footer-section">
      <div className="newsletter-form-section">
        <img
          className="newsletter-section-background"
          alt=""
          src={sectionImageUrl}
        />
        <div className="subscribe-form">
          <div className="form-header">
            <b className="form-title-subtext">subscribe to our newsletter</b>
            <b className="form-title">Get weekly updates</b>
          </div>
          <div className="form">
            <div className="form-text">
              <div className="fill-in-your">
                Fill in your details to join the party!
              </div>
            </div>
            <div className="form-fields">
              <div className="form-text">
                <TextField
                  className="input"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Your name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className="form-text">
                <TextField
                  className="input"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Email address"
                  size="medium"
                  margin="none"
                />
              </div>
            </div>
            <button className="button">
              <div className="unstyledbutton">
                <div className="button1">submit</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="fickleflight-bio">
          <img className="logo-icon" alt="" src={logoImageUrl} />
          <div className="fickle-flight-is">
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </div>
          <img className="social-icons" alt="" src={socialIconImageUrl} />
        </div>
        <div className="seperator" />
        <div className="footer-links">
          <div className="company">
            <div className="about-us">About Us</div>
            <div className="company1">Company</div>
            <div className="news">News</div>
            <div className="careers">Careers</div>
            <div className="how-we-work">How we work</div>
          </div>
          <div className="company">
            <div className="account">Account</div>
            <div className="support1">Support</div>
            <div className="support-center">Support Center</div>
            <div className="faq">FAQ</div>
            <div className="accessibility">Accessibility</div>
          </div>
          <div className="more">
            <div className="covid-advisory">Covid Advisory</div>
            <div className="more1">More</div>
            <div className="airline-fees">Airline Fees</div>
            <div className="tips">Tips</div>
            <div className="how-we-work">Quarantine Rules</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterContainer;
