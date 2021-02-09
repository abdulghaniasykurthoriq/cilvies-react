import React from 'react';
import { FilmListWrap } from './FilmListStyled';

// import FilmService from '../../services/FilmService';
import CardFilm from './CardFilm';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';



class FilmList extends React.Component {



    render() {

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

// const mapStateToProps = (state) => {
//     return{
//         order:state.homeReducer
//     }
// }

// const data = {
//     "title":"della"
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handle: () => dispatch({type:'UPDATE_DATA_FILM', payload:this.state.films})
//     }
// }


export default FilmList;
