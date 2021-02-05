import React, { Component } from "react";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import FilmService from "../../services/FilmService";
import Swal from 'sweetalert2';
import { FilmDetailWrap, ContainerDetail, ImageDetail, TextWrap, CardFilmOptions, StatusPublished } from "./FilmDetailStyled";

class FilmDetail extends Component {
  state = {
    id: null,
    image: "",
    title: "",
    description: "",
    published: "",
    statusPublished:false
  };
  componentDidMount() {
    this.getFilm(this.props.match.params.id);
  }

  getFilm(id) {
    FilmService.retrieveById(id)
      .then((response) => {
        const data = response.data;
        console.log("data", data);
        this.setState({
          id:data.id,
          image: data.imageUrl,
          title: data.title,
          description: data.description,
          published: data.published,
        });
        {this.state.published === "published" && this.setState({statusPublished:true}) }
        {this.state.published === "unpublished" && this.setState({statusPublished:false}) }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  EditFilm = () => {
    const token = localStorage.getItem('token')

      if(token){
        this.props.history.push(`/edit/${this.state.id}`);
        }else{
          Swal.fire(
            'Sorry',
            'You are not Login!',
            'error'
          )
        }

  };
  DeleteFilm =  async() => {
    const token = localStorage.getItem('token')
    if(token){
    await FilmService.delete(this.state.id)
      .then((response) => {
        console.log("berhasil di hapus " + this.state.title);
        this.props.history.push('/')

      })
      .catch((error) => {
        console.log("Kenapa nih" + error);
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
      <FilmDetailWrap>
        <ContainerDetail>
        <ImageDetail src={this.state.image} alt="img" />
        <TextWrap>
          <h1>
            <small>Title</small><br/>
            {this.state.title}
          </h1>
            <p>
                <b>Description</b><br/>
                {this.state.description}
            </p>
            <p>   
              <b>Sinopsis</b><br/>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p><b>Status</b><br/>{this.state.published}</p>
          

          <CardFilmOptions>
            <StatusPublished status={this.state.statusPublished}>
                <FaEye />
            </StatusPublished>  
            <FaPencilAlt onClick={this.EditFilm}  />
            <FaTrash onClick={this.DeleteFilm} />
        </CardFilmOptions>
        </TextWrap>

        </ContainerDetail>
      </FilmDetailWrap>
    );
  }
}

export default FilmDetail;
