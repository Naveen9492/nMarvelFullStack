import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faXTwitter,
  faInstagramSquare,
  faYoutube,
  faLinkedin,
  faSnapchatSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

const Footer = () => (
  <div className="footer-main-container">
    <div className="top-footer">
      <img
        src="https://wallpapers.com/images/high/marvel-studios-logo-blackand-white-98082w3kdbbb0ss6.png"
        alt="marvel-footer-logo"
        className="footer-logo"
      />
      <div className="collection-div">
        <img
          src="https://cdn.marvel.com/content/1x/mu-logo-white_0.png"
          alt="icon"
          className="foter-logo-second"
        />
        <div className="para-div">
          <p className="footer-para1">Marvel Unlimited</p>
          <p className="footer-para2">Access Over 30,000+ Digital Comics</p>
        </div>
      </div>
      <div className="follow-div">
        <p className="follow-text">FOLLOW MARVEL</p>
        <div className="follow-icon-div">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="social-icon facebook"
          />
          <FontAwesomeIcon icon={faXTwitter} className="social-icon twitter" />
          <FontAwesomeIcon
            icon={faInstagramSquare}
            className="social-icon instagram"
          />
          <FontAwesomeIcon icon={faYoutube} className="social-icon youtube" />
          <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
          <FontAwesomeIcon
            icon={faSnapchatSquare}
            className="social-icon snapchat"
          />
        </div>
      </div>
    </div>
    <div className="bottom-footer">
      <p className="bottom-text">Terms of Use</p>
      <p className="bottom-text">Privacy Policy</p>
      <p className="bottom-text">Addendum to the Global Privacy Policy</p>
      <p className="bottom-text">License Agreement</p>
      <p className="bottom-text naveen">By Naveen Kondam</p>
      <p className="bottom-text">©2025 MARVEL</p>
    </div>
  </div>
);

export default Footer;
