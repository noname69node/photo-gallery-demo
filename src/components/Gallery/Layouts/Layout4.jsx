import React from "react";
import "./layouts.scss";
import Photo from "../Photo";

const Layout4 = ({ images }) => {
  return (
    <div className="layout layout4">
      {images.map((image) => {
        return (
          <Photo className={"layout4__img"} key={image.id} image={image} />
        );
      })}
    </div>
  );
};

export default Layout4;
