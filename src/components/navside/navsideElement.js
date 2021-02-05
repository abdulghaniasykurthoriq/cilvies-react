import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';


export const NavSideElement = styled.div`
    width:300px;
    height:100vh;
    display:flex;
    flex-direction:column;
    background:rgba(0,0,0,0.5);
    position:${({click}) => (click ? '' : 'absolute')};
    left:${({click}) => (click ? 0 : '-1000px')};

    @media screen and (max-width:768px){
        right:0;
        width:100%;
        min-height:100vh;
        height:100%;
        position:absolute;
        z-index:99;
        background-color:black;
        transition:0.5s ease-in-out;
        left:${({click}) => (click ? 0 : '-1000px')};
    }
` 

export const LinkWrap = styled.div`
    display:flex;
    flex-direction:column;
    font-size:1.7rem;
    cursor: pointer;
`

export const Link = styled(LinkR)`
    color:white;
    height:50px;
    /* border-bottom:0.5px solid white; */
    display:flex;
    justify-content:left;
    padding-left:10px;
    align-items:center;

    @media screen and (max-width:768px){
        background-color:black;
        border:none;
        justify-content:center;
        padding:0;
    }
`