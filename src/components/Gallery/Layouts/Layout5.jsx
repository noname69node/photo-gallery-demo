import React from "react";
import Photo from "../Photo";

const Layout5 = ({ images }) => {
  return (
    <div className="layout layout5">
      {images.map((image, index) => {
        let cla;

        switch (index % 4) {
          case 0:
            cla = "layout5__img-circle";
            break;
          case 1:
            cla = "layout5__img-square";
            break;
          case 2:
            cla = "layout5__img-square";
            break;
          case 3:
            cla = "layout5__img-circle";
            break;

          default:
            cla = "layout5__img-square";
        }

        return <Photo className={cla} key={image.id} image={image} />;
      })}
    </div>
  );
};

export default Layout5;
