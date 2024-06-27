import React from "react";
import "./HorCard.css";

const HorCard = ({props}) => {
    const {eventName,cityName,weather,distanceKm} = props
    console.log(eventName)
  return (
    <div class="container">
      <div class="banner-image"> </div>
      <div className="below"> {eventName}</div>
      <div className="address">
        <div> 🏠{cityName}</div>
        <div>{weather}|{Math.trunc(distanceKm)} km</div>
      </div>
    </div>
  );
};

export default HorCard;
