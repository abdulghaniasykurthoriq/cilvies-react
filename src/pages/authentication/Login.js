import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import UserService from '../../services/UserService'

const Login = () => {
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[alert,setAlert]       = useState('')
    const history = useHistory();
    // const dispatch = useDispatch();

    const stateGlobal = useSelector(state => state)
    console.log('state global', stateGlobal.userReducer)

    const SubmitLogin =  (e) => {
        e.preventDefault();

        const data = {
            username:username,
            password:password
        }

         UserService.login(data)
        .then(result => {
            console.log('result1',result.data)
            history.push('/')
            if(result){
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('name', result.data.username)
                setAlert(result.data.message)
            }
            // UserService.retrieveById(data.id)
            // .then(resultz => {
            //   dispatch({type:'UPDATE_USER', payload:result.data})

            //   localStorage.setItem('name',resultz.data.username)
            //   console.log('who are you',resultz)
            // })
        })
        .catch(e => {
            console.log(e.response.data)
            setAlert(e.response.data.message)
        })
    }
    

    useEffect(() => {
      return{
        
      }
    },[])

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
        setAlert('')
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
        setAlert('')
    }
    

    return (
        <div className="container d-inline-block">
        <div className="row justify-content-center ">
          <div className="col-md-6 ">
            <div className="card p-4 mt-5">
              <h1>Login</h1>
              <form onSubmit={SubmitLogin}>
              <div className="card-body">
                {alert &&
                (<div className="alert alert-danger">
                    <p>{alert}</p>
                    
                </div>)
                }
                <div className="form-group text-left">
                  <label>Username </label>
                  <input
                    placeholder="Username"
                    className="form-control"
                    value={username}
                    onChange={onChangeUsername}
                     />
                </div>
                <div className="form-group text-left">
                  <label>Password </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={onChangePassword}
                  />
                </div>
                
                
                <div className="d-flex justify-content-between">
                  <button  className="btn btn-primary">
                    Login
                  </button>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Link to='/register'>Belum punya akun ?</Link>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login
