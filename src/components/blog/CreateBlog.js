import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./createBlog.css";

const CreateBlog = () => {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);

  const user_id = localStorage.getItem("auth_id");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user_id", user_id);
    await axios
      .post("/api/blog", formData)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "تبریک میگم!",
            text: res.data.message,
            showConfirmButton: true,
            confirmButtonText: "تایید!",
            timer: 5000,
          });
          navigate("/");
        } else {
          setError(res.data.errors);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-post">
      <div className="container py-5 min-vh-100 d-flex flex-column justify-content-center">
        <div className="post-title text-center">
          <h3 className="my-2 fw-bold text-white">عنوان بلاگ</h3>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-lg-4 bg-dark rounded py-3">
            <div className="post-content">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group mt-3">
                  <label htmlFor="" className="mb-2 text-white">
                    انتحاب عکس
                  </label>
                  <input
                    type="file"
                    className="form-control mb-1"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  {error && (
                    <small className="text-danger mt-2">{error.image}</small>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="" className="mb-2 text-white">
                    عنوان
                  </label>
                  <input
                    type="text"
                    className="form-control mb-1"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {error && (
                    <small className="text-danger mt-2">{error.title}</small>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label className="mb-2 text-white">متن</label>
                  <textarea
                    className="form-control mb-1"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  {error && (
                    <small className="text-danger mt-2">
                      {error.description}
                    </small>
                  )}
                </div>
                <div className="form-group mt-3">
                  <button className="btn btn-success w-100 mt-4" type="submit">
                    ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
