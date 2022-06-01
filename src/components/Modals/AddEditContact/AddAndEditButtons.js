import React from "react";

const AddAndEditButtons = (props) => {
  const { handleAddBtn, handleCancelBtn, isShowAddContactModal } = props;

  return (
    <div className="new-con-btns">
      {isShowAddContactModal ? (
        <>
          <button className="accept" onClick={() => handleAddBtn("AddContact")}>
            Add
          </button>
          <button className="cancel" onClick={handleCancelBtn}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <button className="save" onClick={handleAddBtn}>
            Save
          </button>
          <button className="cancel" onClick={handleCancelBtn}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default AddAndEditButtons;
