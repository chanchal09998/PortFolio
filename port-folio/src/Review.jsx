import React from "react";
import "./Review.css";
import chanchalCollege from "./assets/chanchal-college.png";
import chanchal from "./assets/chanchal-study.png";

const Review = () => {
  return (
    <div className="review-container">
      <div className="reviews">
        <div className="review-1">
          <div className="review-img">
            <img src={chanchalCollege} />
          </div>
          <div className="review-text">
            <p>
              K.B. College provides a nurturing environment for students to grow
              academically and professionally. With a strong focus on practical
              learning and mentorship, we strive to equip students with the
              skills and knowledge needed for their future careers. The
              collaborative atmosphere and supportive faculty make it a great
              place for students to develop and excel.
            </p>
            <h5>Faculty</h5>
            <h5>K.B.College</h5>
          </div>
        </div>
        <div className="review-2">
          <div className="review-text">
            <p>
              My journey at K.B. College has been truly transformative. The
              guidance and support from my teachers have played a crucial role
              in shaping my skills and confidence. The collaborative learning
              environment and friendships I built here have made my experience
              even more enriching. I am grateful for the knowledge, mentorship,
              and lifelong connections I have gained.
            </p>
            <h5>Chanchal Kumar</h5>
            <h5>K.B.College</h5>
          </div>
          <div className="review-img">
            <img src={chanchal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
