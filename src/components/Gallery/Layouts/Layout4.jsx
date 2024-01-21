import React from "react";
import "./layouts.scss";
import Photo from "../Photo";

const Layout4 = ({ images }) => {
  return (
    <div className="layout4">
      <div className="layout4-item">
        {images.map((image) => {
          return <Photo key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
};

export default Layout4;
