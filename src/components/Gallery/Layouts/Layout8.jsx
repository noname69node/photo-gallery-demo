import React from "react";
import Photo from "../Photo";

const Layout8 = ({ images }) => {
  const renderLayout = () => {
    const l = [];

    for (let i = 0; i < images.length; i += 3) {
      const leftImage = images[i];
      const rightImage1 = images[i + 1];
      const rightImage2 = images[i + 2];

      if (leftImage) {
        l.push(
          <div className="layout8__left" key={`layout-left-${i / 3}`}>
            <Photo
              className="layout8__img"
              key={leftImage.id}
              image={leftImage}
            />
          </div>
        );
      }

      if (rightImage1 && rightImage2) {
        l.push(
          <div className="layout8__right" key={`layout-right-${i / 3}`}>
            <Photo
              className="layout8__img"
              key={rightImage1.id}
              image={rightImage1}
            />
            <Photo
              className="layout8__img"
              key={rightImage2.id}
              image={rightImage2}
            />
          </div>
        );
      }
    }

    return l;
  };

  return <div className="layout layout8">{renderLayout(images)}</div>;
};

export default Layout8;
