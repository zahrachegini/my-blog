import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post("/api/login", data)
        .then((res) => {
          if (res.data.status === 200) {
            // localStorage.setItem("auth_token", res.data.token);
            Cookies.set("token", res.data.token);
            localStorage.setItem("user_name", res.data.username);
            localStorage.setItem("auth_id", res.data.user_id);
            Swal.fire({
              icon: "success",
              title: "تبریک میگم",
              text: res.data.message,
              showConfirmButton: true,
              confirmButtonText: "تایید",
              timer: 5000,
            });
            navigate("/");
          } else if (res.data.status === 401) {
            Swal.fire({
              icon: "warning",
              title: "مشکلی پیش آمده",
              text: res.data.message,
              showConfirmButton: true,
              confirmButtonText: "تایید",
              timer: 5000,
            });
          } else {
            setError(res.data.validation_errors);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="auth login">
      <div className="container">
        <div className="row align-items-center min-vh-100 auth-res">
          <div className="col-lg-4 col-md-6 bg-dark py-4 rounded">
            <div className="text-center text-white">
              <h2 className="fw-bold mb-5 auth-title">ورود</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="" className="text-white mb-2">
                  ایمیل
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <small className="text-danger">{error.email}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-white mb-2">
                  پسورد
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <small className="text-danger">{error.password}</small>
                )}
              </div>
              <div className="formgroup mt-4">
                <button type="submit" className="btn btn-success w-100">
                  ورود
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
