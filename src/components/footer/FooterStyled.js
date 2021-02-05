import styled from 'styled-components';



export const FooterStyled = styled.div`
    display:flex;
    justify-content:center;
    width:100wh;
    /* height:300px; */
    background-color:black;
    color:white;
`

export const FooterContainer = styled.div`
    max-width:1100px;
    width:100%;
    /* background-color:blue; */

`
export const ContentFooter = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:10px;
    padding-top:30px;

    @media screen and (max-width:1024px){
        flex-direction:column;
        justify-content:center;
    }
`

export const SocialWrap = styled.div`
    text-align:left;
`

export const ContactPage = styled.div`
    text-align:left;
`

export const FooterContact = styled.div`
    /* background-color:red; */
    text-align:left;
`

export const FooterAddres = styled.div`
    /* background-color:green; */
    max-width:500px;
    padding:10px;
`