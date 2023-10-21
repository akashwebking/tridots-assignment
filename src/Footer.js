import React from "react";
import "./Footer.css";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <img
          src="https://www.indiaretailing.com/wp-content/uploads/2023/01/indiaretail-logo-23.png"
          alt=""
        />
        <h5 className="left"> New Delhi</h5>
        <p className="left">
          Images Multimedia Ltd. S-61 A, Pocket S, Okhla Phase II, Okhla
          Industrial Estate, New Delhi, Delhi 110020 Images Multimedia Ltd.
        </p>

        <h5 className="left">Mumbai</h5>
        <p className="left">
          E 519, Floral Deck Plaza Central MIDC Road, Opp SEEPZ Andheri (East)
          Mumbai 400093
        </p>
        <h5 className="left">Contact Us</h5>
        <p className="left"><BiPhoneCall/> +91-9867355551</p>
        <p className="left"><AiOutlineMail/> editor@indiaretailing.com</p>
        
      </div>
      <div className="about">
        <ul className="aboutfooter">
            <li><h4>About us</h4></li>
            <li>About indiaretail</li>
            <li>Meet the team</li>
            <li>Advatise with us</li>
            <li>Contact us</li>
        </ul>
      </div>
      <div className="catagories">
        <ul className="aboutfooter">
            <li>catagories</li>
            <li>Fashion & lifeStyle</li>
            <li>Beauty & Wellness</li>
            <li>Food & Bevarage</li>
            <li>Consumar durable IT</li>
            <li>Entertainment</li>
            <li>Home Decor & Furnishig</li>
            <li>Specility Retail</li>

        </ul>
      </div>
      <div className="feature">
        <ul className="aboutfooter">
            <li>Features</li>
            <li>Leaders ink</li>
            <li>People</li>
            <li>Finance & Funding</li>
            <li>D2C</li>
            <li>Shoping center</li>
            <li>Result</li>
            <li>Research</li>
            <li>Case Studies</li>
            <li></li>
        </ul>
      </div>
      <div className="events">
        <ul className="aboutfooter">
            <li>Indian food forum</li>
            <li>Shoping center Next</li>
            <li>pygital Retail conctivity</li>
            <li>india D2C submit</li>
            <li>Internet Comerce submit</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
