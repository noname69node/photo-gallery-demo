import React from "react";
import Photo from "../Photo";

const Layout3 = ({ images }) => {
  return (
    <div className="layout layout3">
      {images.map((image) => {
        return <Photo className="layout3__img" key={image.id} image={image} />;
      })}
    </div>
  );
};

export default Layout3;
