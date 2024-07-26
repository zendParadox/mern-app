import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto w-full h-14 flex items-center justify-between">
        <a href="/" className="font-semibold text-xl">
          MERN App
        </a>
        <a
          href="/login"
          className="px-5 py-1 bg-green-300 rounded-xl font-semibold hover:bg-green-400 hover:ring-2 hover:ring-slate-300 active:bg-green-500">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Header;
