const { configureStore } = require("@reduxjs/toolkit");
import userSlice from './../slice/userSlice'


const rootReducer = configureStore({
    reducer: {
        users: userSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument: ''
        },
        serializableCheck: false
    })
})

export default rootReducer