import React from "react";

const Gap = ({ width, height }) => {
  // Menggabungkan kelas-kelas berdasarkan props
  const classes = `${width ? `w-${width}` : ""} ${height ? `h-${height}` : ""}`;

  return <div className={classes}></div>;
};

export default Gap;
