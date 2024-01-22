import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { deletePhoto } from "../../services/photo.service";

const Photo = ({ image, className }) => {
  const handleDelete = async () => {
    await deletePhoto(image.id);
  };

  return (
    <div className="photo">
      <img
        className={`img-fluid ${className}`}
        src={image.url}
        alt={image.id}
      />
      <button className="delete-button" onClick={handleDelete}>
        <BsTrash3Fill size={48} />
      </button>
    </div>
  );
};

export default Photo;
