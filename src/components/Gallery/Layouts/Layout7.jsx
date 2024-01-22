import React from "react";
import Photo from "../Photo";

const Layout7 = ({ images }) => {
  const renderLayout = () => {
    const l = [];

    for (let i = 0; i < images.length; i += 3) {
      const topLeftImage = images[i];
      const topRightImage = images[i + 1];
      const bottomImage = images[i + 2];

      if (topLeftImage && topRightImage) {
        l.push(
          <div className="layout7__top" key={`layout-left-${i / 3}`}>
            <Photo
              className="layout7__top__img"
              key={topLeftImage.id}
              image={topLeftImage}
            />
            <Photo
              className="layout7__top__img"
              key={topRightImage.id}
              image={topRightImage}
            />
          </div>
        );
      } else {
        l.push(
          <div className="layout7__top" key={`layout-left-${i / 3}`}>
            <Photo
              className="layout7__top__img"
              key={topLeftImage.id}
              image={topLeftImage}
            />
          </div>
        );
      }

      if (bottomImage) {
        l.push(
          <div className="layout7__bottom" key={`layout-top-${i / 3}`}>
            <Photo
              className="layout7__top__img"
              key={bottomImage.id}
              image={bottomImage}
            />
          </div>
        );
      }
    }
    return l;
  };

  return <div className="layout layout7">{renderLayout(images)}</div>;
};

export default Layout7;
