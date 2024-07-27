import React from "react";
import { LoginBg } from "../../assets";
import { Link } from "../../components";

const DetailBlog = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="mb-10">
          <img
            src={LoginBg}
            alt="thumb"
            srcset=""
            className="w-full h-80 object-cover"
          />
          <div className="my-4">
            <h3 className="text-xl font-semibold">Title Blog</h3>
            <p className="text-sm text-slate-500">Author - Date Post</p>
          </div>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum ea illum debitis eos aliquid sed vero, cupiditate omnis
              nostrum. Fuga illo animi nulla magni assumenda nostrum cum
              voluptas unde, aspernatur quod provident explicabo alias
              accusantium harum? Magnam asperiores eaque consequuntur? Enim
              aperiam, expedita eum harum numquam possimus excepturi? Maiores,
              quia.
            </p>
          </div>
          <div className="mt-4">
            <Link title={"Back to Home"} onClick={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
