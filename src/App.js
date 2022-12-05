import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import axios from "axios";
import CreateBlog from "./components/blog/CreateBlog";
import Home from "./pages/home/Home";
import BlogDetails from "./pages/blogDetail/BlogDetails";
import MyBlog from "./pages/myBlog/MyBlog";
import EditBlog from "./pages/editBlog/EditBlog";
import Search from "./components/search/Search";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/blog/myblog" element={<MyBlog />} />
        <Route path="/blog/edit/:id" element={<EditBlog />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
