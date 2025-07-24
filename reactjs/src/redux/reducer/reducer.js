


const userReducer = (state = {
    token: null,
    users: []
}, action) => {
    switch (action.type) {
        case "createUser":
            return { ...state };
        case "loginUser":
            return { ...state, token: action.payload };
        case "allUSers":
            return { ...state, users: action.payload };
        default:
            return state;
    }
}

export default userReducer