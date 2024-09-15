import { createSlice } from '@reduxjs/toolkit'

const ColorsCode = {
    "coffe_brown":"rgb(102, 51, 0)", //"#663300"
    "crisp_white":"rgb(255, 255, 255)",
    "taupe_gray":"rgb(181, 174, 164)",
    "cooper":"rgb(184, 115, 51)", // #b87333
    "teal":"rgb(0, 128, 128)",
    "mustard_yellow":"rgb(255, 219, 88)" //#ffdb58 //#ffe68c //#f7db74
}

const DarkMode = {
    mode:'dark',
    primary:{
        main:ColorsCode.cooper
    },
    text:{
        main:ColorsCode.taupe_gray,
        secondary:ColorsCode.crisp_white,
    },
    button:{
        main:ColorsCode.teal
    },
}

const LightMode = {
    mode:'light',
    primary:{
        main:ColorsCode.coffe_brown
    },
    secondary:{
        main:ColorsCode.crisp_white
    },
    background:{
        main:ColorsCode.coffe_brown,
        secondary:ColorsCode.cooper,
    },
    text:{
        main:ColorsCode.crisp_white,
        secondary:ColorsCode.taupe_gray,
    },
}

export const ModeSlice = createSlice({
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

export const {ChangeMode} = ModeSlice.actions

export default ModeSlice.reducer