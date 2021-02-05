import styled from 'styled-components'

export const Iklan = styled.div`
    display:block;
    min-width:100%;
    height:350px;

    @media screen and (max-width:768px){
        height:120px;
    }
`

export const HomeWrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const Container = styled.div`
    max-width:1200px;
    height:100vh;
`