import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/header'
import NavSide from '../components/navside'
import Dashboard from '../pages/Dashboard'
import CreateFilm from '../pages/films/CreateFilm'
import EditFilm from '../pages/films/EditFilm'
import FilmDetail from '../pages/films/FilmDetail'
import Home from '../pages/Home'
import Background from '../components/videos/background.mp4'
import {RouterWrapper, RouteContent, HeroBg, VideoBg} from './RouteStyled'
import Footer from '../components/footer'
import Login from '../pages/authentication/Login'
import Register from '../pages/authentication/Register'
import HistoryPage from '../pages/films/historyPage'
class RoutePage extends React.Component{

    state={
        click:false
    }

    handleClick = () => {
        this.setState({     
            click:!this.state.click
        })
    }

    render(){
    return (
        <BrowserRouter>
            <RouterWrapper>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Background} type='video.mp4' />
                </HeroBg>
                <NavSide click={this.state.click} onClick={this.handleClick}/>
                <RouteContent>
                <Header onClick={this.handleClick} refresh={this.props.refresh} />
                    
                    
                    <Switch>
                        {/* <Route exact path='/'>
                            <Home refresh={this.props.refresh}/>
                        </Route> */}
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/detail/:id' component={FilmDetail}/>
                        <Route exact path='/edit/:id' component={EditFilm}/>
                        <Route exact path='/dashboard' component={Dashboard}/>
                        <Route exact path='/histories' component={HistoryPage}/>
                        <Route path='/create' component={CreateFilm} />
                    </Switch>
                    
                </RouteContent>
                
            </RouterWrapper>
            <Footer/>
        </BrowserRouter>
    )
}
}

export default RoutePage
