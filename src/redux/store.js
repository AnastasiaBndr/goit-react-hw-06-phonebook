import { configureStore } from "@reduxjs/toolkit";
import {itemsSlice} from './itemsSlice'
import {filterSlice} from './filterSlice'


export const store= configureStore({
    reducer:{
        items: itemsSlice.reducer,
        filter: filterSlice.reducer
    },
});