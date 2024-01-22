import React, { useRef } from "react";
import * as bootstrap from "bootstrap/dist/js/bootstrap";
import Input from "../Form/Input";

const { Modal } = bootstrap;

const AddPhotoModal = ({ imageUrl, setImageUrl, onAddPicture }) => {
  const modalRef = useRef();

  const showModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  const hideModal = () => {
    const modalEle = modalRef.current;
    const bsModal = bootstrap.Modal.getInstance(modalEle);
    bsModal.hide();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onAddPicture();
    hideModal();
    setImageUrl("");
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => showModal(true)}>
        Add Photo
      </button>

      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Photo</h5>
              <button
                type="button"
                className="btn-close"
                onClick={hideModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Input
                label=""
                name="photo_url"
                onChange={(e) => {
                  setImageUrl(e.target.value);
                }}
                value={imageUrl}
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPhotoModal;
