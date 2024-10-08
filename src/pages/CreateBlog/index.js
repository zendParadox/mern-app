import React from "react";
import { Input, Button, Upload, TextArea, Link } from "../../components/atoms";
import { LoginBg } from "../../assets";

const DetailBlog = () => {
  return (
    <div className="container mx-auto my-4">
      <Link title={"Kembali"} onClick={"/"} />
      <div className="mt-10 mb-4 text-center text-xl font-semibold">
        <p>Create New Blog Post</p>
      </div>
      <Input label={"Judul Post"} />
      <img
        src={LoginBg}
        alt=""
        srcset=""
        className="mt-4 w-52 h-52 object-cover"
      />
      <Upload />
      <TextArea />
      <div className="flex mt-4 justify-end">
        <div className="w-52  ">
          <Button title={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
