import {createSlice } from "@reduxjs/toolkit";

var elementsFromStorage;
const localStorElements=JSON.parse(localStorage.getItem('contacts'));
if(localStorElements===null || localStorElements.length===0){
    elementsFromStorage=[{ id: 'id-1', name: 'Rosie Simpson', number: '+380004814000' },
    { id: 'id-2', name: 'Hermione Kline', number: '+380018050200' },
    { id: 'id-3', name: 'Eden Clements', number: '+382004004700' },
    { id: 'id-4', name: 'Annie Copeland', number: '+380002023600' },
    { id: 'id-5', name: 'Rosie Simpson', number: '+382804000500' },
    { id: 'id-6', name: 'Hermione Kline', number: '+380020304050' },
    { id: 'id-7', name: 'Eden Clements', number: '+380000300567' },
    { id: 'id-8', name: 'Annie Copeland', number: '+380204050600' },]
}else elementsFromStorage=[...JSON.parse(localStorage.getItem('contacts'))];

export const itemsSlice=createSlice({
    name:'items',
    initialState:elementsFromStorage,
    reducers:{
        add(state, action){
           state.push(action.payload)
        },
        remove(state, action){
            return state.filter(item=>item.id!==action.payload)
        },
    }
});

export const {add, remove}=itemsSlice.actions;