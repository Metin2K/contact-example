import React from 'react'
import { useState, useEffect } from 'react'
function Form({addContacts, contacts}) {
        const [form, setForm] = useState({full_name: "", phone_number:""})
        const onChangeInput = (e) =>{
            setForm({...form, [e.target.name]: e.target.value});
        }
        const onSubmit = (e) =>{
            e.preventDefault();
            if (form.full_name === "" || form.phone_number === ""){ return false;}
            addContacts([...contacts, form])

        }    
        useEffect(() => {
            setForm({full_name: "", phone_number:""})

        }, [contacts])
            
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <input name='full_name' placeholder='Full Name' value={form.full_name} onChange={onChangeInput}></input>
            </div> 
            <div>
                <input type='tel' name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}></input>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    </div>
  )
}

export default Form