import React from "react";
import "./singlereviewcard.css";

const SingleHotelReview = () => {
  return (
    <div className="single-review-card">
      <div className="single-review-card-wrapper">
        <div className="single-review-card-intro">
          <h2>User 1 wrote a review</h2>
          <p>on Jul 2021</p>
        </div>
        <h2 className="single-review-card-score">5-star</h2>
        <div className="single-review-card-content">
          <h2>
            "Convenience, cleanliness, friendliness and warm welcoming at the
            heart of Naha"
          </h2>
          <p>
            We knew the location was extremely convenient and that there was a
            small pool. We knew that there were men’s and women’s baths on the
            second floor too, but didn’t expect them to be quite so
            nice—spacious, new, and looking out onto real plants (we used it in
            the evening and morning). The hotel also seeks serious about
            preventing coronavirus transmission, which was reassuring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelReview;
