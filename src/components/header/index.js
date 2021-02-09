import React, { useEffect, useState } from 'react'
import {HeaderElement, HeaderWrap, ToggleBar, Notification, Logo} from './HeaderStyled'
import { FaBars, FaBell } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import HistoryService from '../../services/HistoryService'
import TotalHistoryService from '../../services/TotalHistoryService'


const Header = (props) => {

 

    const [allLengthHistory,setAllLengthHistory] = useState(0)
    const [currentLength,setCurrentLength]       = useState(0)
    const token = localStorage.getItem('token')
    
    useEffect(() => {
        if(token){
        HistoryService.retrieveAll()
        .then((result) => {
            // console.log(result.data)
            setAllLengthHistory(parseInt(result.data.length))
            // console.log('all', allLengthHistory)
        })
        .catch((error) => {
            console.error(error)
        });
       

        TotalHistoryService.retrieveById(1)
        .then((result) => {
            setCurrentLength(result.data.newHistory);
            // console.log('notif currentLength',currentLength)
        })
        .catch((error) => {
            console.error(error)
        })
        }
        
    },[allLengthHistory,currentLength,token])

    const match = allLengthHistory - currentLength
    // console.log('beda',match)

    const setNotif = () => {
        if(token){
        TotalHistoryService.update(1,{
            totalHistory:0,
            newHistory:currentLength+match
        })
        .then((result) => {
            console.log('perubahan',result.data)
        })
        .catch((error) => {
            console.error(error)
        })
     }
    }

    const history = useHistory();
    return (
        <HeaderElement>
            <HeaderWrap>
                <ToggleBar>
                <FaBars onClick={props.onClick}/>
                </ToggleBar>
                <div>
                <Logo>CILVIES</Logo> 
                </div>
                <div onClick={setNotif}>
                <Notification onClick={() => history.push('/histories')}>
                    {match !== 0 && <span >{match}</span>}
                    <FaBell/>
                </Notification>
                </div>
                
                
                
                
            </HeaderWrap>           
        </HeaderElement>
    )
}

export default Header
