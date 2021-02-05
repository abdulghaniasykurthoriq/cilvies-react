import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import FilmService from "../../services/FilmService";
import {
  CardFilmWrap,
  RowWrap,
  RowCardFilm,
  CardImage,
  TextFilm,
  CardFilmOptions,
  StatusPublished,
  ButtonDetail1,
  ButtonDetail2,
  Btn
} from "./CardFilmStyled";

function CardFilm({ films, refresh  }) {
  const [statusPublished, setStatusPublished] = useState();
  // {films.published === "published" && setStatusPublished(true)}
  useEffect(() => {
    {
      films.published === "published" && setStatusPublished(true);
    }
  });

  const history = useHistory();

  const ShowDetail = () => {
    history.push(`/detail/${films.id}`);
  };
  const EditFilm = () => {
    const token = localStorage.getItem('token')
    if(token){
    history.push(`/edit/${films.id}`);
    }else{
      Swal.fire(
        'Sorry',
        'You are not Login!',
        'error'
      )
    }
  };
  function DeleteFilm(){
    const token = localStorage.getItem('token')
    if(token){
    FilmService.delete(films.id)
      .then((response) => {
        console.log("berhasil di hapus " + films.title);
        console.log(response)
        return refresh();
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

  return (
    <CardFilmWrap>
      <RowWrap>
        <RowCardFilm>
          <CardImage src={films.imageUrl} alt="img" />

          <TextFilm>
            <div>
            <h1>{films.title}</h1>
            </div>
            
            <p>
              <b>Description</b><br/>
              {films.description}
            </p>

            <p>
              <b>Status</b><br/>
              {films.published}
            </p>

            <ButtonDetail1>
              <button onClick={ShowDetail} className="btn btn-primary btn-xs">
                Detail Film
              </button>
            </ButtonDetail1>
          </TextFilm>
        </RowCardFilm>

        <CardFilmOptions>
          <StatusPublished status={statusPublished}>
            <FaEye />
          </StatusPublished>

          <FaPencilAlt onClick={EditFilm} />
          <FaTrash onClick={DeleteFilm} />
        </CardFilmOptions>

        <ButtonDetail2 >
              <Btn onClick={ShowDetail} className="btn btn-primary btn-xs">
                Detail Film
              </Btn>
        </ButtonDetail2>
        
      </RowWrap>
      
    </CardFilmWrap>
  );
}

export default CardFilm;
