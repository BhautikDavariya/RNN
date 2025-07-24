const { default: axiosInt } = require("@/helper/axiosInt");
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");


export const createAccount = createAsyncThunk('user/createAccount', async (data, { dispatch }) => {
    const response = await axiosInt.post('/users-create', data)
    return response
})

export const userLogin = createAsyncThunk('user/userLogin', async (data, { dispatch }) => {
    const response = await axiosInt.post('/users-login', data)
    if (response?.accessToken) {
        localStorage.setItem('token', response?.accessToken)
    }
    return response
})

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (data, { dispatch }) => {
    const response = await axiosInt.get('/users')
    return response
})


const userSlice = createSlice({
    initialState: {
        accessToken: null,
        users: []
    },
    name: 'user',
    extraReducers: builder => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.accessToken = action?.payload?.accessToken
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default userSlice.reducer