import React from "react";
import Photo from "../Photo";

const Layout0 = ({ images }) => {
  return (
    <div className="layout0">
      <div className="photobox">
        {images.map((image) => {
          return (
            <Photo className={"layout0__img"} key={image.id} image={image} />
          );
        })}
      </div>
    </div>
  );
};

export default Layout0;
