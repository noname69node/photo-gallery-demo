import { Outlet } from "react-router-dom";
import GalleryMenu from "../../components/Gallery/GalleryMenu";
import GalleryList from "../../components/Gallery/GalleryList";

const Gallery = () => {
  return (
    <>
      <GalleryMenu />
      <GalleryList />
      <Outlet />
    </>
  );
};

export default Gallery;
