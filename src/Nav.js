import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillCloudRainFill } from "react-icons/bs";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="navcont">
        <div>
          <RxHamburgerMenu />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Catagory</li>
            <li>IR Prime</li>
            <li>Event</li>
            <li>Bookstore</li>
            <li>Newsletter</li>
            <li>Video</li>
          </ul>
        </nav>
        <div>
          <BsFillCloudRainFill /> Friday,20 oct
        </div>
      </div>
      <div className="catagory">
        <nav>
            <ul className="listgapin">
                <li className="list">Fashion & Lifestyle</li>
                <li className="list">Beauty & Wellness</li>
                <li className="list">Food & Bevarage</li>
                <li className="list">Consumer Durable &IT</li>
                <li className="list">Entertinment</li>
                <li className="list">Home Decor & Furniture</li>
                <li className="list">Specility Retail</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
