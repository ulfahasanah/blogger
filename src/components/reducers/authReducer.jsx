const initState = {
    authError: null,
    UserLogin: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: "Login failed",
                UserLogin: null
            };    
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: "Login success",
                UserLogin: action.user
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                authError: null,
                UserLogin: null
            };
        default:
            return state
    }
}

export default authReducer