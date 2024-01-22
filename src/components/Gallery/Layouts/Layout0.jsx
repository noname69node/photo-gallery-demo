import React from "react";
import Photo from "../Photo";

const Layout0 = ({ images }) => {
  return (
    <div className="layout layout0">
      {images.map((image) => {
        return (
          <Photo className={"layout0__img"} key={image.id} image={image} />
        );
      })}
    </div>
  );
};

export default Layout0;
