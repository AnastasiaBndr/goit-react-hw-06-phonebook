import {createSlice } from "@reduxjs/toolkit";
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

var elementsFromStorage=[{ id: 'id-1', name: 'Rosie Simpson', number: '+380004814000' },
    { id: 'id-2', name: 'Hermione Kline', number: '+380018050200' },
    { id: 'id-3', name: 'Eden Clements', number: '+382004004700' },
    { id: 'id-4', name: 'Annie Copeland', number: '+380002023600' },
    { id: 'id-5', name: 'Rosie Simpson', number: '+382804000500' },
    { id: 'id-6', name: 'Hermione Kline', number: '+380020304050' },
    { id: 'id-7', name: 'Eden Clements', number: '+380000300567' },
    { id: 'id-8', name: 'Annie Copeland', number: '+380204050600' },]

export const itemsSlice=createSlice({
    name:'items',
    initialState:{items:[]},
    reducers:{
        add(state, action){
           state.items.push(action.payload)
        },
        remove(state, action){
            return state.items.filter(item=>item.id!==action.payload)
        },
    }
});

const persistConfig={
    key: 'root',
    storage: storage,
    whitelist:['items']
}

export const persistedItemsReducer= persistReducer(persistConfig, itemsSlice.reducer)

export const {add, remove}=itemsSlice.actions;