import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, CreateBlog, DetailBlog } from "../../pages";

const MainApp = () => {
  return (
    <div>
      <p>Header</p>

      <Routes>
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/detail-blog" element={<DetailBlog />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <p>Content</p>
      <p>Footer</p>
    </div>
  );
};

export default MainApp;
