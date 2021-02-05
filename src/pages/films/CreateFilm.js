import { Dropdown } from "react-bootstrap";
import React, { Component } from "react";
import Swal from 'sweetalert2';
import FilmService from "../../services/FilmService";

class CreateFilm extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    published: "published",
    erorMsg:''
  };

  

  OnSubmit = () => {
    const token = localStorage.getItem('token')

    let data = {
      title: this.state.title,
      description: this.state.description,
      imageUrl: this.state.image,
      published: this.state.published,
    };

    if(token){
    
    FilmService.create(data)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(e => {
        this.setState({
          erorMsg:e.response.data.message
        })
        console.log('state',this.state.erorMsg)
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
                    onChange={(e) => this.setState({ title: e.target.value, erorMsg:'' })}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Description </label>
                  <input
                    placeholder="Masukan Judul"
                    className="form-control"
                    value={this.state.description}
                    onChange={(e) =>
                      this.setState({ description: e.target.value, erorMsg:'' })
                    }
                  />
                </div>
                <div className="form-group text-left">
                  <label>Image Url </label>
                  <input
                    placeholder="Masukan Judul"
                    className="form-control"
                    value={this.state.image}
                    onChange={(e) => this.setState({ image: e.target.value, erorMsg:'' })}
                  />
                </div>
                {
                  this.state.erorMsg && (
                    <div className="alert alert-danger">
                      <p>{this.state.erorMsg}</p>
                    </div>
                  )
                }
                
                <div className="d-flex justify-content-between">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {this.state.published}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() =>
                          this.setState({ published: "published" })
                        }
                      >
                        Published
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() =>
                          this.setState({ published: "unpublished" })
                        }
                      >
                        Unpublished{" "}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <button onClick={this.OnSubmit} className="btn btn-primary">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFilm;
