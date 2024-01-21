import { Outlet } from "react-router-dom";
import GalleryMenu from "../../components/Gallery/GalleryMenu";
import GalleryList from "../../components/Gallery/GalleryList";
import { useEffect, useState } from "react";
import { getAllUserPhotos } from "../../services/photo.service";
import { useUserAuth } from "../../context/UserAuthContext";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [layout, setLayout] = useState("default");

  const { user } = useUserAuth();

  const handleLayoutChange = (selectedLayout) => {
    setLayout(selectedLayout);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        await getAllUserPhotos(user.uid, setImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, [layout]);

  return (
    <>
      <GalleryMenu layout={layout} onLayoutChange={handleLayoutChange} />
      <GalleryList images={images} layout={layout} />
      <Outlet />
    </>
  );
};

export default Gallery;
