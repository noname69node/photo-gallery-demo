import React from "react";
import Photo from "../Photo";

const Layout2 = ({ images }) => {
  return (
    <div className="layout layout2">
      {images.map((image) => {
        return (
          <Photo className={"layout2__img"} key={image.id} image={image} />
        );
      })}
    </div>
  );
};

export default Layout2;
