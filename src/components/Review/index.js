import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { showStars } from "../../functions";

export default function Review(props) {
  const { id, title, comment, rating, image, userId, showLink } = props.review;

  console.log("review props", props.review);

  return (
    <>
      <div style={{ width: "25%" }}></div>
      <Jumbotron className="Review-component">
        {/* <h2>{props.review.place.name}</h2>
         */}
        <h3>
          {title} {showStars(rating)}
        </h3>{" "}
        <i>posted by {}</i>
        <img src={image} alt={title} />
        <p>{comment}</p>
        {showLink ? (
          <Link to={`/reviews/${id}`}>
            <Button>View the review...</Button>
          </Link>
        ) : null}
      </Jumbotron>
      <div style={{ width: "25%" }}></div>
    </>
  );
}