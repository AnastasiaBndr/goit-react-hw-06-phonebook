import {createSlice } from "@reduxjs/toolkit";
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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