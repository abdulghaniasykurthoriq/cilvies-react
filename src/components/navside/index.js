import React from 'react';
import {useHistory} from 'react-router-dom';
import { FaArrowLeft, FaHome, FaLongArrowAltDown, FaLongArrowAltUp, FaPencilAlt } from 'react-icons/fa'
import { RiDashboardLine } from 'react-icons/ri';
import { NavSideElement, LinkWrap, Link } from './navsideElement';



const NavSide = (props) => {
    const token = localStorage.getItem('token');
    const history = useHistory();

    const logoutAccount = () => {
        
        localStorage.clear()
        history.push('/login')

    }

    return (
        <NavSideElement click={props.click}>
            <div className='d-flex justify-content-end display-5 m-3 text-warning'>
                <FaArrowLeft onClick={props.onClick}/>
            </div>
            <LinkWrap>
            
            <Link to='/' onClick={props.onClick} 
                         style={{textDecoration: 'none'}}>
                         <FaHome/>Home</Link>
            <Link to='/dashboard' 
                         onClick={props.onClick}
                         style={{textDecoration: 'none'}}> <RiDashboardLine/> Dashboard</Link>
            <Link to='/create' 
                         onClick={props.onClick}
                         style={{textDecoration: 'none'}}>
                         <FaPencilAlt/>Create</Link>
            {token ?
            (<div onClick={logoutAccount} ><Link to='/login' onClick={props.onClick}> <FaLongArrowAltUp/> Logout</Link></div>) :
            (<Link to='/login' 
                         onClick={props.onClick}
                         style={{textDecoration: 'none'}}>
                         <FaLongArrowAltDown/> Login</Link>)
                         

            
}
            </LinkWrap>
        </NavSideElement>
    )
}

export default NavSide
