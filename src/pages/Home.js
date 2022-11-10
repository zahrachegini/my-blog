import React from "react";
import blog from "../assets/images/blog.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <div className="container حغ-5">
          <h1 className="fw-bold home-title">خانه</h1>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="blog-item shadow">
                <img src={blog} alt="" className="w-100 blog-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
