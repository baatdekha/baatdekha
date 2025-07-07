import React from "react";
import shopTogetherBanner from "../Home/shopping-in-raghunathpali.jpeg";
import "./ShopTogether.css";

const ShopTogether = () => {
  return (
    <div className="coming-soon-container">
      <div className="poster">
        <img src={shopTogetherBanner} alt="Banner" />
      </div>
      <div className="text-container">
        <div className="coming-soon-text">Coming Soon</div>
        <div className="tagline">Shop Together, Save Together</div>
      </div>
    </div>
  );
};

export default ShopTogether;

