import React from "react";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="w-full h-40 border rounded-xl" {...rest}></textarea>
    </div>
  );
};

export default TextArea;
