import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const handlePost = async () => {
      axios.get("/api/view-blog").then((res) => {
        setData(res.data.blog);
      });
    };
    handlePost();
  }, []);

  return (
    <div className="home">
      <div className="home-img"></div>
      <div className="container py-5">
        <h1 className="fw-bold home-title">بلاگ ها</h1>
        <div className="row mt-5">
          {data.map((post) => {
            return (
              <div className="col-lg-4 col-md-6 mt-4" key={post.id}>
                <div className="blog-item shadow">
                  <img
                    src={`http://localhost:8000/uploads/blog/${post.image}`}
                    alt=""
                    className="w-100 blog-img"
                  />
                  <div className="blog-item-txt p-3">
                    <div className="author border-bottom pb-3">
                      <h6 className="fw-bold">{post.title}</h6>
                      <small className="fw-bold text-muted">
                        نویسنده : {post.user.name}
                      </small>
                      <Link
                        to={`/blogdetails/${post.id}`}
                        className="btn btn-dark d-block w-100 mt-4"
                      >
                        مشاهده
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
