import React from "react";
import FeaturedBlog from "../featuredBlog/FeaturedBlog";
import "./featuredBlogs.css";

const FeaturedBlogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-wrapper">
        <FeaturedBlog />
        <FeaturedBlog />
        <FeaturedBlog />
        <button className="showmoref">Show More</button>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
