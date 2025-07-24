import axiosHelper from "../../helper/axiosHelper"




export const createAccount = (data) => async (dispatch) => {
    try {
        const res = await axiosHelper.post("/users-create", data)
        dispatch({
            type: 'createUser',
            payload: res?.data || []
        })
        return res.data
    } catch (error) {
        console.log('error', error)
    }
}

export const loginAccount = (data) => async (dispatch) => {
    try {
        const res = await axiosHelper.post("/users-login", data)
        if (res.data.accessToken) {
            localStorage.setItem('token', res.data.accessToken)
        }
        dispatch({
            type: 'loginUser',
            payload: res.data
        })
        return res.data
    } catch (error) {
        console.log('error', error)
    }
}

export const fetchUsers = () => async (dispatch) => {
    try {
        const res = await axiosHelper.get("/users")
        dispatch({
            type: 'allUSers',
            payload: res.data
        })
        // return res.data
    } catch (error) {
        console.log('error', error)
    }
} 