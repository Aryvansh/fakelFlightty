import "./LosAngelesContainer.css";

const LosAngelesContainer = () => {
  return (
    <div className="header">
      <div className="banner">
        <img
          className="banner-background"
          alt=""
          src="../banner-background@2x.png"
        />
        <div className="title">
          <div className="stays-in-los">Stays in Los Angeles</div>
          <div className="options">
            <div className="pilldefault">
              <div className="beds">Recommended</div>
            </div>
            <div className="pilldefault1">
              <div className="beds">Price</div>
            </div>
            <div className="pilldefault1">
              <div className="beds">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LosAngelesContainer;
