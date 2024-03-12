import React from 'react'
import { useState, useEffect } from 'react'

function List({contacts}) {
  const [FilterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some(key => 
      item[key]
        .toString()
        .toLowerCase()
      .includes(FilterText.toLowerCase()))
  });

  console.log("filtered", filtered)
  return (
    <div>
      <input placeholder="Filter Contact" value={FilterText} onChange={(e) => setFilterText(e.target.value)}></input>
      <ul className='list'>
        {
        contacts.map((contact, i) => (
          <li key={i}> {contact.full_name} - {contact.phone_number}</li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List