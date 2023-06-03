
import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, number, email } = props.contact;
  const confirmDelete = () => {
    const result = window.confirm("Delete the contact from storage?");
    if (result) {
      props.clickHandler(id);
    }
  };

  return (
    <div className="item">
      <div className="user-icon">
        <i className="fa-solid fa-user-large"></i> 
      </div>
      <div className="content">
        <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
          <div className="header">{name}</div>
          <div>{number}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div className="user-edit-icon">
        <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
          <i className="fa-solid fa-pen"></i>
        </Link>
      </div>
      <div className="user-minus-icon">
        <i
          className="fa-solid fa-user-minus"
          onClick={confirmDelete}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;

