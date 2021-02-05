import React, { useState } from "react";
import FilmList from "../films/FilmList";
import { Container, Carousel, CarouselItem } from "react-bootstrap";
import { Container as Cz, HomeWrap, Iklan } from "./HomeStyled";
import { FaSearch } from "react-icons/fa";
import FilmService from "../../services/FilmService";
import { Link } from "react-scroll";
import { connect } from "react-redux";
class Home extends React.Component {
  state = {
    films: [],
    search: "",
    totalSearch: "",
  };

  componentDidMount = async () => {

    // if(this.state.search == ''){
    await FilmService.retrieveAll()
      .then((response) => {
        const data = response.data;
        console.log("fecth", data);
        this.setState({ films: data });
      })
      .catch((error) => {
        console.error(error);
      });
    // }
  
  };

  onSubmitData = async (e) => {
    e.preventDefault();
    await FilmService.searchByTitle(this.state.search)
      .then((response) => {
        const data = response.data;
        this.setState({
          films: data,
          totalSearch: data.length,
        });
        console.log("banyaknya data", data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  onChangeSearch = (e) => {
 
    this.setState({
      search: e.target.value,
      totalSearch: "",
    });
  };

  render() {
    return (
      <HomeWrap>
        <Container>
          <br />
          <Cz>
            <Carousel>
              <CarouselItem>
                <Iklan>
                  <img
                    className="d-block w-100 h-100"
                    src="https://media.harrypotterfanzone.com/harry-potter-movie-posters-header.jpg"
                    alt="img"
                  />
                </Iklan>
              </CarouselItem>
              <CarouselItem>
                <Iklan>
                  <img
                    className="d-block w-100 h-100"
                    src="https://www.wowkeren.com/display/images/photo/2020/10/26/00336422s1.jpg"
                    alt="imgs"
                  />
                </Iklan>
              </CarouselItem>
              <CarouselItem>
                <Iklan>
                  <img
                    className="d-block w-100 h-100"
                    src="https://hardrockfm.com/wp-content/uploads/2014/05/images_The-Amazing-Spider-Man-2-Full-HD-Poster.jpg"
                    alt="img3"
                  />
                </Iklan>
              </CarouselItem>
              <CarouselItem>
                <Iklan>
                  <img
                    className="d-flex w-100 h-100"
                    src="https://wallpapercave.com/wp/wp3775632.jpg"
                    alt="img4"
                  />
                </Iklan>
              </CarouselItem>
            </Carousel>
            <br />

            <button className="btn btn-danger" onClick={this.logout}>
              <Link activeClass="active" to="films">
                Kunjungi fiilm kesukaan anda
              </Link>
            </button>
            {/* <div className="input-group d-flex justify-content-center mt-3"> */}
            <form
              onSubmit={this.onSubmitData}
              className="input-group d-flex justify-content-center mt-3"
            >
              <div className="form-outline">
                <input
                  type="search"
                  placeholder="Search films"
                  className="form-control"
                  value={this.state.search}
                  onChange={this.onChangeSearch}
                />
              </div>
              <button className="btn btn-primary">
                <FaSearch />
              </button>
            </form>
            {this.state.totalSearch && (
              <div className="flex-lg-column justify-content-center m-2">
                <h3 className="text-light">
                  Ditemukan {this.state.totalSearch} dengan pencarian{" "}
                  {this.state.search}
                </h3>
                <button className="btn btn-success btn-xs ml-2">
                  <Link activeClass="active" to="films">
                    Click me for visited results
                  </Link>
                </button>
              </div>
            )}

            <div>
              <button className="btn btn-success">Populer</button>
              <button className="btn btn-primary m-2">
                Paling banyak di tonton
              </button>
              <button className="btn btn-warning">Horor</button>
              <button className="btn btn-secondary">Horor</button>
              <button className="btn btn-info">Horor</button>
            </div>
          </Cz>
          <p>Component Home</p>

          <FilmList
            search={this.state.search}
            films={this.state.films}
            refresh={this.componentDidMount}
          />
        </Container>
      </HomeWrap>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('cila',state)
  return{
      wew:state.userReducer
  }
}

// const data = {
//   "title":"della"
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//       handle: () => dispatch({type:'UPDATE_DATA_USER', payload:data})
//   }
// }

export default connect(mapStateToProps)(Home);

// import React, { useState } from "react";
// import FilmList from "../films/FilmList";
// import { Container, Carousel, CarouselItem } from "react-bootstrap";
// import { Container as Cz, HomeWrap, Iklan } from "./HomeStyled";
// import { FaSearch } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import FilmService from "../../services/FilmService";
// import { Link } from "react-scroll";

// const Home = () => {
//   const [search, setSearch] = useState("");
//   const [totalReasearch,setTotalResearch] = useState('')

//   const logout = () => {
//     localStorage.clear();
//   };
//   const dispatch = useDispatch();

//   const onSubmitData = async (e) => {
//     e.preventDefault();
//     FilmService.searchByTitle(search)
//       .then((response) => {
//         const data = response.data;
//         console.log('banyaknya data',data.length)
//         setTotalResearch(data.length)
//         dispatch({ type: "UPDATE_DATA_FILM", payload: data });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const onChangeSearch = (e) => {
//     setSearch(e.target.value);
//     setTotalResearch('')
//   };

//   return (
//     <HomeWrap>
//       <Container>
//         <br />
//         <Cz>
//           <Carousel >
//             <CarouselItem>
//               <Iklan>
//                 <img
//                   className="d-block w-100 h-100"
//                   src="https://media.harrypotterfanzone.com/harry-potter-movie-posters-header.jpg"
//                   alt="img"
//                 />
//               </Iklan>
//             </CarouselItem>
//             <CarouselItem>
//               <Iklan>
//                 <img
//                   className="d-block w-100 h-100"
//                   src="https://www.wowkeren.com/display/images/photo/2020/10/26/00336422s1.jpg"
//                   alt="imgs"
//                 />
//               </Iklan>
//             </CarouselItem>
//             <CarouselItem>
//               <Iklan>
//                 <img
//                   className="d-block w-100 h-100"
//                   src="https://hardrockfm.com/wp-content/uploads/2014/05/images_The-Amazing-Spider-Man-2-Full-HD-Poster.jpg"
//                   alt="img3"
//                 />
//               </Iklan>
//             </CarouselItem>
//             <CarouselItem>
//               <Iklan>
//                 <img
//                   className="d-flex w-100 h-100"
//                   src="https://wallpapercave.com/wp/wp3775632.jpg"
//                   alt="img4"
//                 />
//               </Iklan>
//             </CarouselItem>
//           </Carousel>
//           <br />

//           <button className="btn btn-danger" onClick={logout}>
//           <Link activeClass="active" to='films'>Kunjungi fiilm kesukaan anda</Link>

//           </button>
//           {/* <div className="input-group d-flex justify-content-center mt-3"> */}
//             <form onSubmit={onSubmitData} className="input-group d-flex justify-content-center mt-3">
//               <div className="form-outline">
//                 <input
//                   type="search"
//                   placeholder="Search films"
//                   className="form-control"
//                   value={search}
//                   onChange={onChangeSearch}
//                 />
//               </div>
//               <button className="btn btn-primary">
//                 <FaSearch />
//               </button>
//             </form>
//             {totalReasearch &&
//             (
//             <div className="flex-lg-column justify-content-center m-2">
//               <h3 className="text-light">Ditemukan  {totalReasearch} dengan pencarian {search}</h3>
//               <button className="btn btn-success btn-xs ml-2"><Link activeClass="active" to='films'>Click me for visited results</Link></button>
//             </div>
//             )}

//           <div>
//             <button className="btn btn-success">Populer</button>
//             <button className="btn btn-primary m-2">
//               Paling banyak di tonton
//             </button>
//             <button className="btn btn-warning">Horor</button>
//             <button className="btn btn-secondary">Horor</button>
//             <button className="btn btn-info">Horor</button>
//           </div>
//         </Cz>
//         <p>Component Home</p>

//         <FilmList search={search} />
//       </Container>
//     </HomeWrap>
//   );
// };

// export default Home;
