import React from "react";
import "./featuredBlog.css";
import img from "./img.jpg";

const FeaturedBlog = () => {
  return (
    <div className="blogs">
      <div className="blog-wrapper">
        <img src={img} alt="img" className="blog-img" />
        <div className="blog-text">
          <div className="blog-title">
            <h2>The title for blog</h2>
            <p>4 days ago</p>
          </div>
          <div className="blog-place">
            <p>by Author</p>
            <h2>from Sylhet</h2>
          </div>
          <p>
            Summary of the blog line 1. Summary of the blog line 2. Summary of
            the blog line 3. Summary of the blog line 4. Summary of the blog
            line 5.
          </p>
          <div className="blog-review">
            <h2>42 replies</h2>
            <p>hotel review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
