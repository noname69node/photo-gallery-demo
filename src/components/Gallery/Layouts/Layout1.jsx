import React from "react";
import Photo from "../Photo";

const Layout1 = ({ images }) => {
  return (
    <div className="layout1">
      {images.map((image) => {
        return <Photo key={image.id} image={image} />;
      })}
    </div>
  );
};

export default Layout1;
