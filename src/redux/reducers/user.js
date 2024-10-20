import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:null,
        user:null,
        email:null,
        number:null,
        modalidade:null,
        picture:null,
    },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setNumber: (state, action) => {
            state.number = action.payload
        },
        setModalidade: (state, action) => {
            state.modalidade = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setPicture: (state, action) => {
            state.picture = action.payload
        }
    }
})

export const {setUser, setEmail, setNumber, setModalidade, setName, setPicture} = userSlice.actions

export default userSlice.reducer