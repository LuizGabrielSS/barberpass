import { createSlice } from '@reduxjs/toolkit'

const DarkMode = {
    mode:'dark',
    primary:{
        main:"#000",
        secondary:"#A60321",
    },
    secondary:{
        main:"rgb(181, 174, 164)"
    },
    text:{
        main:"#400112",
        secondary:"#A60321",
        ter:'#000',
    },
    background:{
        main:"#A60321",
        secondary:"#730220",
        ter:"rgb(181, 174, 164)",
    },
    button:{
        main:"#668C14"
    },
}

const LightMode = {
    mode:'light',
    primary:{
        main:"#000",
        secondary:"#A60321",
        ter:"rgb(255, 255, 255)",
    },
    secondary:{
        main:"rgb(255, 255, 255)"
    },
    background:{
        main:"#A60321",
        secondary:"#400112",
        ter:"rgb(181, 174, 164)",
    },
    text:{
        main:"rgb(255, 255, 255)",
        secondary:"rgb(181, 174, 164)",
        ter:'#000',
    },
    button:{
        main:"#730220"
    },
}

export const modeSlice = createSlice({
    name:'mode',
    initialState:{
        darkmode:LightMode
    },
    reducers:{
        ChangeMode: (state, action) => {
            state.darkmode = action.payload ? DarkMode : LightMode
        }
    }
})

export const {ChangeMode} = modeSlice.actions

export default modeSlice.reducer