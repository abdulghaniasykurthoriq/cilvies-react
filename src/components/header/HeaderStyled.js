import styled from 'styled-components'

export const HeaderElement = styled.div`
    z-index:8;
    display:flex;
    align-items:center;
    justify-content:center;
    height:80px;
    width:100wh;
    /* background-color: #34bdeb; */
    /* background-color:crimson; */
    background-color:white;
`

export const HeaderWrap = styled.div`
    display:flex;
    font-size:2rem;
    margin:2rem 0;
    font-family: 'Rock Salt', cursive;
    /* background-color:blue; */
    width:100%;
    margin:0 20px 0 20px;
    justify-content:space-between;
`
export const ToggleBar = styled.div`
    cursor:pointer;
`

export const Notification = styled.div`
    /* background-color:green; */
    cursor: pointer;

    span{
        font-family:sans-serif;
        font-size:15px;
        color:white;
        background-color:red;
        border-radius:50%;
        padding-left:5px;
        padding-right:5px;
        position:absolute;
        top:10px;
        right:8px;
    }
`

export const Logo = styled.div`
    margin-left:2rem;

`