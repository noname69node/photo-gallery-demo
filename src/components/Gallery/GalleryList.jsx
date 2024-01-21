import { Link } from "react-router-dom";

const GalleryList = ({ images, layout }) => {
  return (
    <div className="container">
      {images.map((image) => {
        return <img className="img-fluid" src={image.url} />;
      })}
    </div>
  );
};

export default GalleryList;
