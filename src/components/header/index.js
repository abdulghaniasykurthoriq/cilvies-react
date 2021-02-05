import React from 'react'
import {HeaderElement, HeaderWrap, ToggleBar, Notification, Logo} from './HeaderStyled'
import { FaBars, FaBell } from 'react-icons/fa'

const Header = (props) => {
    return (
        <HeaderElement>
            <HeaderWrap>
                <ToggleBar>
                <FaBars onClick={props.onClick}/>
                </ToggleBar>
                <div>
                <Logo>CILVIES</Logo> 
                </div>
                <Notification>
                    <span>9+</span>
                    <FaBell/>
                </Notification>
                
                
                
                
            </HeaderWrap>           
        </HeaderElement>
    )
}

export default Header
