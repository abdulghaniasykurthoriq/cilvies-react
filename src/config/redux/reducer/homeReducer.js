const initialStateHome = {
    dataFilms:[]
}


const homeReducer = (state = initialStateHome,action) => {
    if(action.type === 'UPDATE_DATA_FILM'){
        return {
            ...state,
            dataFilms:action.payload
        }
    }
    return state
}

export default homeReducer