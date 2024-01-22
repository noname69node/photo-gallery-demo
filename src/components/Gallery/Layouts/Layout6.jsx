import React from "react";
import Photo from "../Photo";

const Layout6 = ({ images }) => {
  const renderLayout = () => {
    const l = [];

    for (let i = 0; i < images.length; i += 3) {
      const leftImage1 = images[i];
      const leftImage2 = images[i + 1];
      const rightImage = images[i + 2];

      if (leftImage1 && leftImage2) {
        l.push(
          <div className="layout6__left" key={`layout-left-${i / 3}`}>
            <Photo
              className="layout6__img"
              key={leftImage1.id}
              image={leftImage1}
            />
            <Photo
              className="layout6__img"
              key={leftImage2.id}
              image={leftImage2}
            />
          </div>
        );
      } else {
        l.push(
          <div className="layout6__left" key={`layout-left-${i / 3}`}>
            <Photo
              className="layout6__img"
              key={leftImage1.id}
              image={leftImage1}
            />
          </div>
        );
      }

      if (rightImage) {
        l.push(
          <div className="layout6__right" key={`layout-right-${i / 3}`}>
            <Photo
              className="layout6__img"
              key={rightImage.id}
              image={rightImage}
            />
          </div>
        );
      }
    }
    return l;
  };

  return <div className="layout layout6">{renderLayout(images)}</div>;
};

export default Layout6;
