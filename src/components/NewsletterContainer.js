import FooterContainer from "../components/FooterContainer";
import "./NewsletterContainer.css";

const NewsletterContainer = () => {
  return (
    <div className="footer-section1">
      <FooterContainer
        sectionImageUrl="../newsletter-section-background1@2x.png"
        logoImageUrl="../logo1.svg"
        socialIconImageUrl="../social-icons1.svg"
      />
    </div>
  );
};

export default NewsletterContainer;
