import React from 'react'
import {HeaderElement, HeaderWrap, Logo} from './HeaderStyled'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    return (
        <HeaderElement>
            <HeaderWrap>
                <FaBars/>
                <Logo>CILVIES</Logo> 
            </HeaderWrap>           
        </HeaderElement>
    )
}

export default Header
