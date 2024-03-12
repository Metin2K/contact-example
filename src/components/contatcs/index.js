import { useState, useEffect } from 'react'
import React from 'react'
import List from './List'
import Form from './Form'
import './style.css'
function Contacts() {

  const [contacts, setContacts] = useState([
    {
      full_name: "Metilla",
      phone_number: "5387752765"
    },
    {
      full_name: "Diana",
      phone_number: "5387765654"
    }
   ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  

  return (
    <div id='container'>
        <List contacts={contacts} />
        <Form addContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts