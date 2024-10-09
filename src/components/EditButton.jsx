import React from "react";
import { Link } from "react-router-dom";

const EditButton = () => {
  return (
    <button className="edit-button">
      <Link to="/EditPage" className="no-underline">
        Edit Name
      </Link>
    </button>
  );
};

export default EditButton;
