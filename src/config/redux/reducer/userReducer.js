const initialState = {
    data : []
}

const userReducer = (state= initialState, action) => {
    if(action.type === 'UPDATE_USER'){
        return{
            ...state,
            data:action.payload
        }
    }
    return state;
}

export default userReducer