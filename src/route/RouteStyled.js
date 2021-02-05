import styled from 'styled-components';


export const RouterWrapper = styled.div`
    display:flex;
    width:100%;
    min-height:100%;
    position:relative;

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index:-1;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    filter: brightness(50%);
    background: #232a34;
`;

export const RouteContent = styled.div`
    width:100%;
    min-height:100vh;
    height:100%; 
`

export const Content = styled.div`
    background-color:yellow;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;

`