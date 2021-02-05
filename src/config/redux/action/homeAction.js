import FilmService from '../../../services/FilmService'

export const setDataFilm = () => {
    return (dispatch) => {
        FilmService.retrieveAll()
        .then(response => {
            const data = response.data;
            // setFilm(data)

            dispatch(({type:'UPDATE_DATA_FILM', payload:data}))
        })
        .catch(error => {
            console.error(error)
        })
    }

}