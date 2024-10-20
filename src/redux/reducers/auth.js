import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        token:null,
        refresh:null
        },
    reducers:{
        setToken: (state, action) => {
            state.token = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refresh = action.payload
        },
    }
})

export const {setToken, setRefreshToken} = authSlice.actions

export default authSlice.reducer