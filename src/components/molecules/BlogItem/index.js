import React from "react";
import { Button } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = (props) => {
  const navigate = useNavigate();
  const { image, title, name, date, body } = props;
  const navigateToDetailBlog = () => {
    navigate("/detail-blog");
  };
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };
  return (
    <div>
      <div className=" p-3 rounded-xl shadow-lg">
        <div className="">
          <img
            src={[image]}
            alt="post"
            srcset=""
            className="rounded-t-lg w-full h-full object-cover"
          />
        </div>
        <div className="mt-3">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex text-sm text-slate-500">
            <p className="">
              {name} {"-"}
            </p>
            <p>
              {"- "} {formatDate(date)}
            </p>
          </div>
          <p className="my-3">{body}</p>
        </div>
        <Button title={"View Details"} onClick={navigateToDetailBlog} />
      </div>
    </div>
  );
};

export default BlogItem;
