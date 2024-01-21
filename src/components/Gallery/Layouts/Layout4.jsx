import React from "react";
import "./layouts.scss";

const Layout4 = ({ images }) => {
  return (
    <div className="layout4">
      {images.map((image) => {
        return (
          <div key={image.id} className="layout4-item">
            <img className="img-fluid" src={image.url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Layout4;
