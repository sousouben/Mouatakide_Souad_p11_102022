import React from "react";
import "./StarRating.css";
import StarFull from "../IconsStar/StarFull";
import StarGrey from "../IconsStar/StarGrey";

function StarRating(props) {
  const ratingNumber = props.rating;
  let starsArray = [];

  for (let i = 0; i < 5; i++) {
    i < ratingNumber
      ? starsArray.push(<StarFull key={starsArray.toString()} />)
      : starsArray.push(<StarGrey key={starsArray.toString()} />);
  }

  return (
    <div className="rate">
      <span>{starsArray}</span>
    </div>
  );
}

export default StarRating;
