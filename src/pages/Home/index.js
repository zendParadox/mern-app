import React from "react";

import { Button } from "../../components/atoms";
import BlogItem from "../../components/molecules/BlogItem";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full   flex justify-end mt-8">
        <div className="">
          <Button title={"Create Blog"} />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8 ">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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
