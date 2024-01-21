import React from "react";
import Photo from "../Photo";

const Layout3 = ({ images }) => {
  return (
    <div className="layout3">
      <div className="layout3-item">
        {images.map((image) => {
          return <Photo key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
};

export default Layout3;
