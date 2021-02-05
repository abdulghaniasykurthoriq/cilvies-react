// import React, { useEffect, useState } from 'react';
// import { FilmListWrap } from './FilmListStyled';
// import FilmService from '../../services/FilmService';
// import CardFilm from './CardFilm';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setDataFilm } from '../../config/redux/action';

// const FilmList = () => {
//     // const[films,setFilm] = useState([])
//     // const {dataFilms, name} = useSelector(state => state)
//     const {dataFilms} = useSelector(state => state.homeReducer)
//     const dispatch = useDispatch();
//     console.log('State Global nih',dataFilms)


//     useEffect(() => {
//         dispatch(setDataFilm())

//     },[dispatch])




//         console.log('state global',dataFilms)

//         const renderData = dataFilms.map(films => {
//             return(
//                 <CardFilm films={films} key={films.id} refresh={useEffect} />
//             )
//         })

//         return (
//             <FilmListWrap id='films'>
//                 <div className='d-flex justify-content-end'>
//                     {/* <button className="btn btn-primary">{name}</button> */}
//                     <Link to='/create'><button className='btn btn-success mb-2'> + Create Library Film</button></Link>
//                     {/* <input className="search" value={this.state.search} onChange={getInput} /> */}
//                 </div>
        
//                 {renderData}   
//             </FilmListWrap>
//         )

// }

// export default FilmList



























import React from 'react';
import { FilmListWrap } from './FilmListStyled';

// import FilmService from '../../services/FilmService';
import CardFilm from './CardFilm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class FilmList extends React.Component {

    

    render() {
        console.log('order',this.props.order)
        console.log('props film',this.props.films)
        // console.log(this.state.films)
        // console.log(this.state.search)
        const renderData = this.props.films.map(films => {
            return(
                <CardFilm films={films} key={films.id} refresh={this.props.refresh} />
            )
        })

        return (
            <FilmListWrap id="films">
                <div className='d-flex justify-content-end'>
                    {/* <button className="btn btn-primary" onClick={this.props.handle}>order</button> */}
                    <Link to='/create'><button className='btn btn-success mb-2'> + Create Library Film</button></Link>
                    {/* <input className="search" value={this.state.search} onChange={getInput} /> */}
                </div>
        
                {renderData}   
            </FilmListWrap>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order:state.homeReducer
    }
}

const data = {
    "title":"della"
}

const mapDispatchToProps = (dispatch) => {
    return {
        handle: () => dispatch({type:'UPDATE_DATA_FILM', payload:this.state.films})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FilmList);

