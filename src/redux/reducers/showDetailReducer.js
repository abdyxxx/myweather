const initialState = {
    
}

export default function showDetailReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_DETAIL':
            return {
                showModale: action.data
            }
        default:
            return state;
    }
}