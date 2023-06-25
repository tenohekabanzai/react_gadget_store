import "./Newsletter.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedIn,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign Up for latest Updates and Offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icons">
            <FaFacebookF size={14} />
          </div>
          <div className="icons">
            <FaTwitter size={14} />
          </div>
          <div className="icons">
            <FaInstagram size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
