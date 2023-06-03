

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import api from "../api/contacts";
import './App.css';
import Header from "./Header";
import AddContacts from "./AddContacts";
import EditContacts from './EditContacts';
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    setContacts(contacts.map(contact => {
      return contact.id === response.data.id ? { ...response.data } : contact;
    }));
  };

  const searchHandler = (searchTerm) => {
    setsearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="js-files-in-app.js">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/contact/:id"
            component={ContactDetails}
          />

          <Route
            path="/add"
            render={(props) => (
              <AddContacts {...props} addContactHandler={addContactHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContacts {...props} updateContactHandler={updateContactHandler} />
            )}
          />

          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;



