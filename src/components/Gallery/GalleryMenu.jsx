import React, { useState } from "react";
import LayoutSelector from "./LayoutSelector";
import AddPhotoModal from "./AddPhotoModal";
import { addPhoto } from "../../services/photo.service";
import { auth } from "../../config/firebase.config";

const GalleryMenu = ({ onAddPicture }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleAddPhoto = async () => {
    console.log("Add photo: " + imageUrl);
    await addPhoto(auth?.currentUser.uid, imageUrl);
  };

  return (
    <div className="container d-flex">
      <AddPhotoModal
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        onAddPicture={handleAddPhoto}
      />
      <LayoutSelector />
    </div>
  );
};

export default GalleryMenu;
