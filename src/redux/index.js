import {configureStore} from '@reduxjs/toolkit'

import modeSlice from './reducers/mode'
import authslice from './reducers/auth'

export default configureStore({
    reducer: {
        mode: modeSlice,
        auth: authslice
    },
  })