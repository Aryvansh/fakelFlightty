import "./MatterhornPopup.css";

const MatterhornPopup = ({ onClose }) => {
  return (
    <div className="matterhorn-popup">
      <iframe
        className="video"
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default MatterhornPopup;
