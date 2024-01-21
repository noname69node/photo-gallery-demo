import React, { useRef, useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { deletePhoto } from "../../services/photo.service";

const Photo = ({ image }) => {
  const handleDelete = async () => {
    await deletePhoto(image.id);
  };

  return (
    <div className="photo">
      <img className="img-fluid" src={image.url} alt={image.id} />
      <button className="delete-button" onClick={handleDelete}>
        <BsTrash3Fill size={48} />
      </button>
    </div>
  );
};

export default Photo;
