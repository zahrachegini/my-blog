import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./comment.css";
import axios from "axios";
import Swal from "sweetalert2";
const Comments = () => {
  const [description, setDeescrtiption] = useState("");
  const [comments, setComments] = useState([]);
  const reset = () => {
    setDeescrtiption("");
  };

  let user_id = JSON.parse(localStorage.getItem("auth_id"));
  const { id } = useParams();

  useEffect(() => {
    getComment();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      description: description,
      blog_id: id,
      user_id: user_id,
    };
    await axios.post("/api/comment", data).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "تبریک میگم!",
          text: res.data.message,
          showConfirmButton: true,
          confirmButtonText: "تایید!",
          timer: 5000,
        });
        reset();
        getComment();
      }
    });
  };

  const getComment = async () => {
    await axios.get("/api/comment-view/" + id).then((res) => {
      setComments(res.data);
    });
  };

  return (
    <div className="comment">
      <form onSubmit={handleSubmit}>
        <textarea
          name="description"
          placeholder="نظر شما"
          value={description}
          onChange={(e) => setDeescrtiption(e.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-success btn-sm">
          ارسال نظر
        </button>
      </form>

      <div className="bg-white mb-5">
        {comments &&
          comments.map((comment) => {
            const { id, user, description } = comment;
            return (
              <div className="p-4 border shadow-sm mt-3" key={id}>
                <div className="author d-flex align-items-center ">
                  <small className="text-muted fw-bold mt-2">{user.name}</small>
                </div>
                <h6 className="fw-bold mt-4">{description}</h6>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
