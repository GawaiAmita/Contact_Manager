
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler}
      key={contact.id}
    />
  ));

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="ui-celled-list">
      {/* <div className="Heading-Contact-List">
        <h3>Contact List</h3>
      </div> */}
      <div className="search-bar">
        <div className="icon-input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
      <Link to="/add">
        <button className="add-button">Add</button>
      </Link>
      <div className="Heading-Contact-List">
        <h3>Contact List</h3>
      </div>
      {renderContactList.length > 0 ? (
        renderContactList
      ) : (
        <p className="mismatch">No contact is available</p>
      )}
    </div>
  );
};

export default ContactList;
