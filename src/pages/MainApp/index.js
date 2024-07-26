import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, CreateBlog, DetailBlog } from "../../pages";
import { Header, Footer } from "../../components/molecules";

const MainApp = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <Header />

      <div className="px-4 lg:px-9 h-full">
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default MainApp;
