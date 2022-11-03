import axios from "axios";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "./auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    await axios
      .post("http://127.0.0.1:8000/api/register", data)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "تبریک میگم",
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
  };

  return (
    <div className="auth register">
      <div className="container">
        <div className="row align-items-center min-vh-100 auth-res">
          <div className="col-lg-4 col-md-6 bg-dark py-4 rounded">
            <div className="register-titel text-center text-white">
              <h2 className="fw-bold mb-3 auth-title">ثبت نام</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  نام شما
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control mb-1"
                  onChange={(e) => setName(e.target.value)}
                />
                {error && <small className="text-danger">{error.name}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-white mb-2">
                  ایمیل
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control mb-1"
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
                  name="password"
                  className="form-control mb-1"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <small className="text-danger">{error.password}</small>
                )}
              </div>
              <div className="formgroup mt-4">
                <button type="submit" className="btn btn-success w-100">
                  ثبت نام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
