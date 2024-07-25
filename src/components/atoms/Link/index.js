import React from "react";

const Link = ({ situation, title, onClick }) => {
  return (
    <div>
      <p className="text-center text-sm  text-gray-500">
        {situation}{" "}
        <a
          href="/login"
          className="font-semibold underline leading-6 text-indigo-600 hover:text-indigo-500">
          {title}
        </a>
      </p>
    </div>
  );
};

export default Link;
