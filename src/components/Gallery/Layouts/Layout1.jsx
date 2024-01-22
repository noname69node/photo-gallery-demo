import React from "react";
import Photo from "../Photo";

const Layout1 = ({ images }) => {
  return (
    <div className="layout layout1">
      {images.map((image) => {
        return (
          <Photo
            className="img-fluid layout1__img"
            key={image.id}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Layout1;
