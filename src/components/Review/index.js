import React from "react";
import { useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { showStars } from "../../functions";

export default function Review(props) {
  const { id, title, comment, rating, image, showLink } = props.review;
  const user = props.review.user;
  const userName = user.name;
  const place = props.review.place;
  const placeName = place.name;

  console.log("review props", props.review);

  return (
    <>
      <div style={{ width: "10%" }}></div>
      <Jumbotron className="Review-component">
        <h2>
          {placeName} {showStars(rating)}
        </h2>
        <br />
        <h3>{title}</h3>
        <br />
        <img src={image} alt={title} />
        <br />
        <br />
        <h4>{comment}</h4>
        <br />
        <h6>
          <i>posted by {userName}</i>
        </h6>
        {showLink ? (
          <Link to={`/reviews/${id}`}>
            <Button>View the review...</Button>
          </Link>
        ) : null}
      </Jumbotron>
      <div style={{ width: "10%" }}></div>
    </>
  );
}
