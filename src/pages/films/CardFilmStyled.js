import styled from 'styled-components';

export const CardFilmWrap = styled.div`
    margin-bottom:20px;
    background-color:#f2f2f2;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-radius:10px;
    /* background-color:green; */

    @media screen and (max-width:768px){

    }
`
export const RowWrap = styled.div`
    display:flex;
    /* background-color:green; */
    justify-content:space-between;
    align-items:center;
    position:relative;
    @media screen and (max-width:768px){
        flex-direction:column;
    }
`
export const RowCardFilm = styled.div`
    display:flex;
    width:100%;
    position:relative;
    overflow:hidden;
    text-overflow:ellipsis;

    /* background-color:yellow; */

    @media screen and (max-width:768px){
        flex-direction:column;
    }
`

export const CardImage = styled.img`
    border-radius:10px;
    width:250px;
    @media screen and (max-width:768px){
        max-width:300px;
        width:100%;

        align-self:center;
    }
`
export const ButtonDetail1 = styled.div`
    display:flex;
    justify-content:center;
    margin-top:10px;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const ButtonDetail2 = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:flex;
        margin-bottom:10px;
    }
`
export const Btn = styled.button`
    /* display:none */
`

export const TextFilm = styled.div`
    text-align:left;
    overflow:hidden;
    text-overflow:ellipsis;
    /* background-color:yellow; */
    /* max-width:600px; */
    width:100%;

    margin:10px;
    margin-left:20px;


    @media screen and (max-width:768px){
        margin-left:10px;

    }
    @media screen and (max-width:414px){
        width:96%;
        margin-left:10px;
    }
    @media screen and (max-width:375px){
        width:97%;
        margin-left:10px;
    }
`

export const CardFilmOptions = styled.div`
    font-size:1.5rem;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:space-between;
    /* background-color:white; */
    margin:10px;
    width:100px;
    height:70px;

    @media screen and (max-width:768px){
        width:30%;
        align-self:center;
        padding:10px;
        /* align-self:flex-end; */
    }
`
export const StatusPublished = styled.div`
    color:${({status}) => (status ? 'black' : '#ccd6c5')}
`


export const AllStart = styled.div`
    position:relative;
    display:flex;
    padding:0;
    margin:0;
    /* background-color:grey; */
    justify-content:center;
    /* background-color:grey; */
`

export const DefaultStar = styled.div`
    position:absolute;
    top:0;
    /* bottom:0; */
    /* padding:0;
    margin-top:0; */
    color:yellow;
    /* z-index:1; */

`
export const ReviewStar = styled.div`
    display:flex;
    justify-content:center;
    color:yellow;
    margin-top:5px;
    z-index:3
`
export const Bhungkuss = styled.div`
    /* background-color:red; */
    margin-top:0;
    width:95px;
    display:flex;
    align-items:flex-start;
    text-align:right;
`
