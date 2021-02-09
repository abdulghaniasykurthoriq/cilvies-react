import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
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
  Btn,
  DefaultStar,
  AllStart,
  ReviewStar,
  Bhungkuss
} from "./CardFilmStyled";
import HistoryService from "../../services/HistoryService";

function CardFilm({ films, refresh  }) {
  const [statusPublished, setStatusPublished] = useState();
  // {films.published === "published" && setStatusPublished(true)}
  useEffect(() => {
      console.log('wellcome')
      films.published === "published" && setStatusPublished(true);

  },[]);


  const[star,setStar] = useState(0)
  const user = localStorage.getItem('name')
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
        console.log("berhasil di hapus " + films.title + 'oleh '+ user);
        // console.log(response)
        const dataHistory = {
          username:localStorage.getItem('name'),
          title:films.title,
          action:'deleted'
        }
        HistoryService.create(dataHistory)
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
  // console.log(star)


  const items = []
  for(let i =0; i<star; i++){
    items.push(<AiFillStar/>)
  }
  // console.log('cans',items)

  const renderData = items.map((item, index) => {
    return(
        <span key={index}>{item}</span>
    )
  })
  // const agat = <AiFillStar/>
  // console.log('agat',agat)

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
              <b>Category</b><br/>
              {films.category}
            </p>
            <p>
              <b>Price</b><br/>
              {films.price}
            </p>




            <AllStart>
                <ReviewStar>
                  <AiOutlineStar onClick={() => setStar(1)}/>
                  <AiOutlineStar onClick={() => setStar(2)}/>
                  <AiOutlineStar onClick={() => setStar(3)}/>
                  <AiOutlineStar onClick={() => setStar(4)}/>
                  <AiOutlineStar onClick={() => setStar(5)}/>
                  <AiOutlineStar onClick={() => setStar(6)}/>
              </ReviewStar>
              <DefaultStar>
                <Bhungkuss>
                 {renderData}
                </Bhungkuss>

              </DefaultStar>
            </AllStart>




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
