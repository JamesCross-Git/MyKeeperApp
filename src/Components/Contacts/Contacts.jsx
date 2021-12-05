import React from "react";
import Card from "./Card";
import ContactList from "./ContactList";
import "./Contacts.css"

function createCard(contact) {
  return (
  <Card 
  id={contact.id}
  key={contact.id}
  name={contact.name}
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email}
  />
  );
}

function Contacts() {
  return (
    <div className='cardstyle'>
      <h1 className="heading">My Heroes</h1>
      {ContactList.map(createCard)}
    </div>
  );
}

export default Contacts;
