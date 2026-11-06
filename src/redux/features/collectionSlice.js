import { createSlice } from "@reduxjs/toolkit";

const getStoredCollection = () => {
    try {
        return JSON.parse(localStorage.getItem("collection")) || [];
    } catch {
        return [];
    }
};

const initialState = {
    items: getStoredCollection()
};

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        getCollection: (state) => {
            try {
                state.items = JSON.parse(localStorage.getItem("collection")) || [];
            } catch {
                state.items = [];
            }
        },
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(item => item.id === action.payload.id)

            if(!alreadyExists){
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)

            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []

            localStorage.removeItem('collection')
        }
    }
})

export const { getCollection, addCollection, removeCollection, clearCollection } = collectionSlice.actions

export default collectionSlice.reducer