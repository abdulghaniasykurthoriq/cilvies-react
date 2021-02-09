import React from "react";
import FilmService from "../../services/FilmService";
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HistoryService from "../../services/HistoryService";

class EditFilm extends React.Component {
  state = {
    id: null,
    image: "",
    title: "",
    description: "",
    published: "",
    erorMsg:"",
    category:"",
    price:0,
  };

  componentDidMount() {
    this.getFilm(this.props.match.params.id);
  }
  getFilm(id) {
    FilmService.retrieveById(id)
      .then((response) => {
        const data = response.data;
        this.setState({
          id: data.id,
          image: data.imageUrl,
          title: data.title,
          description: data.description,
          published: data.published,
          category:data.category,
          price:data.price
        });
        const user = localStorage.getItem('name');
        const dataHistory = {
          username:user,
          title:data.title,
          action:'update'
        }
        HistoryService.create(dataHistory)
      })
      .catch(e => {
        console.log(e.response.data.message)
      });
  }

  onUpdate = () => {

    const token = localStorage.getItem('token')
    if(token){
    FilmService.update(this.state.id, {
      title: this.state.title,
      description: this.state.description,
      imageUrl: this.state.image,
      published: this.state.published,
    })
      .then((response) => {
        this.props.history.push('/')
      })
      .catch(e => {
        this.setState({
          erorMsg:e.response.data.message
        })
      });

    }else{
      Swal.fire(
        'Sorry',
        'You are not Login!',
        'error'
      )
    }
  };

  render() {
    return (
      <div className="container d-inline-block">
        <div className="row justify-content-center ">
          <div className="col-md-6 ">
            <div className="card p-4 mt-5">
              <div className="card-body">
                <div className="form-group text-left">
                  <label>Title </label>
                  <input
                    placeholder="Masukan Judul"
                    className="form-control"
                    value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value })}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Description </label>
                  <input
                    placeholder="Masukan Judul"
                    className="form-control"
                    value={this.state.description}
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </div>
                <div className="form-group text-left">
                  <label>Image Url </label>
                  <input
                    placeholder="Masukan Judul"
                    className="form-control"
                    value={this.state.image}
                    onChange={(e) => this.setState({ image: e.target.value })}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Price</label>
                  <input
                    placeholder="Price ..."
                    className="form-control"
                    value={this.state.price}
                    onChange={(e) => this.setState({ price: e.target.value })}
                  />
                </div>
                {
                  this.state.erorMsg && (
                    <div className="alert alert-danger">
                      <p>{this.state.erorMsg}</p>
                    </div>
                  )
                }

                <div className="d-flex justify-content-left mb-2">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      {this.state.category}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.setState({category:'uncategory'})}>uncategory</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({category:'comedy'})}>comedy</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({category:'horor'})}>horor</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({category:'action'})}>action</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({category:'romance'})}>romance</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({category:'thriller'})}>thriller</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({category:'drama'})}>drama</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({category:'fantasy'})}>fantasy</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({category:'mistery'})}>mistery</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="d-flex justify-content-between">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.published}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.setState({published:'published'})} >Published</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({published:'unpublished'})}>Unpublished </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                  <button onClick={this.onUpdate} className="btn btn-primary">
                    Update Film
                  </button>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <p>
                    <Link to="/">See any film</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditFilm;
