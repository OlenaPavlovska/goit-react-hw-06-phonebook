import {createSlice} from '@reduxjs/toolkit'



const  initialState = {
    contacts: [],
    filter:'',
} 

const contactsSlice = createSlice({
name: 'contacts',initialState,
reducers: {
    addContacts:(state,action)=>{
        state.contacts.push(action.payload)
    },
    deleteContacts:(state,action)=>{
        state.contacts = state.contacts.filter(contact=> contact.id !==action.payload)
    },
    updateFilter:(state,action)=>{
state.filter= action.payload
    }
}
}) 

export const {addContacts,deleteContacts,updateFilter}= contactsSlice.actions

export default contactsSlice.reducer