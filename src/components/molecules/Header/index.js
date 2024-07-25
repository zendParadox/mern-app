import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="w-full h-14 px-4 lg:px-9 bg-blue-100 flex items-center justify-between">
        <a href="/" className="font-semibold text-xl">
          MERN App
        </a>
        <a href="/login" className="">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Header;
