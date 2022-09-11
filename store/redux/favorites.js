import {createSlice, isDraft} from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name:'favorites',
    initialState: {
        ids: ['4tdfgtw']
    },
    reducers: {
        addFavorite: (state, action) => {
            if (state.ids.includes(action.payload.id)) return state
            const newState = {...state, ids:[...state.ids,action.payload.id]}
            return (newState)
            // state.ids.push(action.payload.id)
        },
        removeFavorite: (state, action) => {
            return ({...state,ids:[...state.ids.filter(id => id != action.payload.id)]})
           
            // state.ids.splice(state.ids.indexOf(action.payload.id), 1)

        },
        removeAllFavorites: (state) => {
            state.ids = []
        }
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite
export const removeFavorite = favoritesSlice.actions.removeFavorite
export const removeAllFavorites = favoritesSlice.actions.removeAllFavorites

export default favoritesSlice.reducer