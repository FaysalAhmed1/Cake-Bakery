import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://mighty-thicket-14562.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  let cutu = reviews.slice(0, 99);
  return (
    <>
      <h2 className="mt-5 container mt-5 pt-3 pb-3 bg-info"> User reviews </h2>
      <div className="container review-container container mt-5 mb-5 pt-5 pb-5 bg-info">
        {cutu.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </>
  );
};

export default Reviews;
