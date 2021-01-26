import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/header'
import NavSide from '../components/navside'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import {RouterWrapper, RouteContent} from './RouteStyled'
const RoutePage = () => {
    return (
        <BrowserRouter>
            <RouterWrapper>
                <NavSide/>
                <RouteContent>
                <Header/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/dashboard' component={Dashboard}/>
                    </Switch>
                </RouteContent>
                
            </RouterWrapper>
        </BrowserRouter>
    )
}

export default RoutePage
