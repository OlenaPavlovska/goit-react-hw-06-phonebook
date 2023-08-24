import {persistStore, persistReducer} from "redux-persist"
import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import contactsReducer from "./contactSlice" 



const saveConfig = {
    key: 'root',storage,
}

const persistedReducer= persistReducer(saveConfig,contactsReducer)

export const store = configureStore({
reducer:{
    contacts: persistedReducer,
}

})

export const persistor = persistStore(store)