import React, { useEffect, useState } from "react";

import { Button } from "../../components/atoms";
import BlogItem from "../../components/molecules/BlogItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/blog/posts?page=1&perPage=10")
      .then((result) => {
        console.log(result.data.data);
        const responseAPI = result.data;
        setDataBlog(responseAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();

  const navigateToCreateBlog = () => {
    navigate("/create-blog");
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full flex justify-end mt-8">
        <div className="">
          <Button title={"Create Blog"} onClick={navigateToCreateBlog} />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8 ">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="my-8 flex xl:justify-center">
        <div className="m-3 w-36 xl:w-56">
          <Button title={"Previous"} />
        </div>
        <div className="mt-3 w-36 xl:w-56">
          <Button title={"Next"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
