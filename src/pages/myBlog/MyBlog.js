import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BsFillEmojiNeutralFill,
  BsFillEmojiLaughingFill,
} from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import "./myBlog.css";

const MyBlog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const HandleDelete = async (id) => {
    await axios.delete(`/api/blog/${id}`).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "تبریک میگم",
          text: res.data.message,
          showConfirmButton: true,
          confirmButtonText: "تایید",
          timer: 5000,
        });
        loadData();
      }
    }); //"/api/blog" + id
  };

  const loadData = async () => {
    let id = JSON.parse(localStorage.getItem("auth_id"));
    await axios.get("/api/blog/" + id).then((res) => {
      setData(res.data);
    });
  };
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
                  <div className="blog-item-img">
                    <img
                      src={`http://localhost:8000/uploads/blog/${post.image}`}
                      alt=""
                      className="w-100 blog-img"
                    />
                    <div className="blog-tool">
                      <span className="edit">
                        <Link to={`/blog/edit/${post.id}`}>
                          <BsFillEmojiLaughingFill />
                        </Link>
                      </span>
                      <span
                        className="trash"
                        onClick={() => HandleDelete(post.id)}
                      >
                        <BsFillEmojiNeutralFill className="text-color" />
                      </span>
                    </div>
                  </div>

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

export default MyBlog;
