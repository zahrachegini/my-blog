import axios from "axios";
import React from "react";
import { useState } from "react";
import "./auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    await axios
      .post("http://localhost:8000/api.register", data, {
        headers:{}
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth register">
      <div className="container">
        <div className="row align-items-center min-vh-100 auth-res">
          <div className="col-lg-4 col-md-6 bg-dark py-4 rounded">
            <div className="register-titel text-center text-white">
              <h2 className="fw-bold mb-5 auth-title">ثبت نام</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  نام شما
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-white mb-2">
                  ایمیل
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-white mb-2">
                  پسورد
                </label>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
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