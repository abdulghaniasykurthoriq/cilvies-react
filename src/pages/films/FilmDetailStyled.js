import styled from 'styled-components';

export const FilmDetailWrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:10px;
    height:100%;
    background-color:white;
    position:relative;
    overflow:hidden;
    text-overflow:ellipsis;

    @media screen and (max-width:768px){
        flex-direction:column;
    }
`
export const ContainerDetail = styled.div`
    max-width:1000px;
    position:relative;
    
`

export const ImageDetail = styled.img`

    @media screen and (max-width:768px){
        width:400px;
    }
`
export const TextWrap = styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
    overflow:hidden;
    text-overflow:ellipsis;
    
    position: relative;
    margin: 20px 0 0 30px;
    @media screen and (max-width:768px){
        width:85%;
    }
    @media screen and (max-width:360px){
        width:81%;
        margin-left:40px;
    }
    @media screen and (max-width:320px){
        width:70%;
        margin-left:60px;
    }
    @media screen and (max-width:280px){
        width:60%;
        margin-left:80px;
    }
`

export const CardFilmOptions = styled.div`
    font-size:1.5rem;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:space-between;
    background-color:white;
    width:100px;

    @media screen and (max-width:768px){
        width:30%;
        align-self:center;
        padding:10px;
    }
`

export const StatusPublished = styled.div`
    color:${({status}) => (status ? 'black' : '#ccd6c5')}
`
