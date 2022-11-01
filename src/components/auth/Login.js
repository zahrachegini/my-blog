import React from "react";
import "./auth.css";

const Login = () => {
  return (
    <div className="auth login">
      <div className="container">
        <div className="row align-items-center min-vh-100 auth-res">
          <div className="col-lg-4 col-md-6 bg-dark py-4 rounded">
            <div className="text-center text-white">
              <h2 className="fw-bold mb-5 auth-title">ورود</h2>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="" className="text-white mb-2">
                  ایمیل
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-white mb-2">
                  پسورد
                </label>
                <input type="text" className="form-control" />
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
