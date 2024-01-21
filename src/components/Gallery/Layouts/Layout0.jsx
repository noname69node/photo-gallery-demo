import React from "react";

const Layout0 = ({ images }) => {
  return (
    <div className="layout0">
      {images.map((image) => {
        return (
          <div key={image.id} className="layout0-item">
            <img className="img-fluid" src={image.url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Layout0;
