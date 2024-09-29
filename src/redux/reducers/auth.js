import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        token:null,
        refresh:null,
        user:null
    },
    reducers:{
        setToken: (state, action) => {
            state.token = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refresh = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {setToken, setRefreshToken, setUser} = authSlice.actions

export default authSlice.reducer