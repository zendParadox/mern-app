import React from "react";
import { LoginBg } from "../../../assets";
import { Button } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = () => {
  const navigate = useNavigate();
  const navigateToDetailBlog = () => {
    navigate("/detail-blog");
  };
  return (
    <div>
      <div className=" p-3 rounded-xl shadow-lg">
        <div className="">
          <img
            src={LoginBg}
            alt="post"
            srcset=""
            className="rounded-t-lg w-full h-full object-cover"
          />
        </div>
        <div className="mt-3">
          <h3 className="font-semibold text-xl">Title Blog</h3>
          <div className="flex text-sm text-slate-500">
            <p className="">Author {"/"}</p>
            <p> Date Post</p>
          </div>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            et veritatis sed iusto dignissimos perferendis eligendi officia
            corrupti quisquam sapiente?
          </p>
        </div>
        <Button title={"View Details"} onClick={navigateToDetailBlog} />
      </div>
    </div>
  );
};

export default BlogItem;
