const initialState = {
    isAuth: !!sessionStorage.isAuth
}

export default function isAuthReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTH':
            return {
                isAuth: action.data
            }
        default:
            return state;
    }
}