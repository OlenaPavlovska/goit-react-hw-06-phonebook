
import { Section } from "./section/section.jsx";
import { Filter } from "./filter/filter.jsx";

import { ContactForm } from "./contactform/contactform.jsx";
import { ContactList } from "./contactList/contactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { addContacts,deleteContacts, updateFilter } from "redux/contactSlice.js";



export const App=() => {
  const contacts = useSelector(state=>state.contacts.contacts)
  const filter = useSelector(state=>state.contacts.filter)
  const dispatch = useDispatch()

const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

const addContact = ({name,number})=>{
  const existContacts = contacts.find(contact => contact.name && contact.name.toLowerCase() === name.toLowerCase())

  if (existContacts){
    Notiflix.Notify.failure(`${name} is already exist!`)
    return
  }
dispatch(addContacts({id:nanoid(),name,number}))
}

const filterChange = e =>{
  dispatch(updateFilter(e.target.value))
}

const onDelete= contactId=>{
  dispatch(deleteContacts(contactId))
}


   return (
      <>
        <Section title="PHONEBOOK">
          <ContactForm onSubmit={addContact} />
        </Section>
         <Section title="CONTACTS">
        <Filter
          filter={filter}
          handleChange={filterChange}
          />
          <ContactList contacts={filterContacts} onDelete={onDelete} />
      </Section>
    </>
  );
  }
 































