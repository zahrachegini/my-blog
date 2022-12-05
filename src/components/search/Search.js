import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./search.css";

const Search = () => {
  const [data, setData] = useState("");
const [visible, setVisible] = useState()

  async function searchBlog(key) {
    await axios.get("/api/search/" + key).then((res) => {
      setData(res.data);
    });
  }

  return (
    <div className="container py-5">
      <div className="row py-5 justify-content-center">
        <div className="col-lg-4">
          <h4 className="text-center-fw-bold border-bottom pb-3">جستجو کنید</h4>
          <input
            type="text"
            className="mt-3 form-control"
            placeholder="متن موردنظر را وارد کنید"
            onChange={(e) => searchBlog(e.target.value)}
          />
        </div>
        <div className="col-lg-12 mt-5">
          <div className="row">
            {data &&
              data.slice(0, 3).map((item) => {
                return (
                  <div className="col-lg-4 col-md-4" key={item.id}>
                    <div className="blog-search shadow">
                      <img
                        src={`http://localhost:8000/uploads/blog/${item.image}`}
                        alt=""
                        className="w-100 blog-img"
                      />
                      <div className="blog-item-text p-3">
                        <div className="author border-bottom pb-2">
                          <h6 className="fw-bold">{item.title}</h6>
                          <small className="fw-bold text-muted">
                            نویسنده:
                            {item.user.name}
                          </small>
                        </div>
                        <Link
                          to={`/blogdetails/${item.id}`}
                          className="btn btn-dark d-block w-100 mt-4"
                        >
                          مشاهده
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
