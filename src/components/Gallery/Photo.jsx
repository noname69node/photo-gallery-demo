import React from "react";
import { BsTrash3Fill } from "react-icons/bs";

const Photo = ({ image }) => {
  return (
    <div className="photo">
      <img className="img-fluid" src={image.url} alt="" />
      <button className="delete-button" onClick={() => {}}>
        <BsTrash3Fill size={48} />
      </button>
    </div>
  );
};

export default Photo;
