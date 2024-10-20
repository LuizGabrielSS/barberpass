import {configureStore} from '@reduxjs/toolkit'

import modeSlice from './reducers/mode'
import authSlice from './reducers/auth'
import userSlice from './reducers/user'

export default configureStore({
    reducer: {
        mode: modeSlice,
        auth: authSlice,
        user: userSlice
    },
  })