import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserService from '../../services/UserService';

const Register = () => {
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[errorMsg, setErrorMsg] = useState('')
    const[errName,setErrName] = useState('')
    const[errEmail,setErrEmail] = useState('')
    const[errPassword,setErrPassword] = useState('')

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            username: username,
            email: email,
            password: password
          };
        UserService.create(data)
        .then( results => {
            if(results.data){
                history.push("/");
            }
            console.log(results.data)
          })
        .catch(e => {
            const dataEror = e.response.data.message;
            setErrorMsg(e.response.data.message);
            if(dataEror === "Username can't be empty"){
              setErrName(dataEror)
            }else if(dataEror === "Email can't be empty" || dataEror === "Email macam apa ini"){
              setErrEmail(dataEror)
            }else if(dataEror === "Password can't be empty" || dataEror ==="Passordnya dikit banget si"){
              setErrPassword(dataEror)
            }

        })
        
    }


    const onChangeUsername = (e) => {
        setUsername(e.target.value)
        setErrorMsg('')
        setErrName('')
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        setErrorMsg('')
        setErrEmail('')
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
        setErrorMsg('')
        setErrPassword('')
    }


    return (
        <div className="container d-inline-block">
        <div className="row justify-content-center ">
          <div className="col-md-6 ">
            
            <div className="card p-4 mt-5">
                <h1>Register</h1>
              <div className="card-body">
                  <form onSubmit={handleSubmit}>
                <div className="form-group text-left">
                  <label>Username </label>
                  <input
                    placeholder="Username"
                    className="form-control"
                    value={username}
                    onChange={onChangeUsername}
                     />
                     {errName &&
                     (<p className="text-danger">*{errName}</p>)
                    }
                </div>
                <div className="form-group text-left">
                  <label>Email </label>
                  <input
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={onChangeEmail}
                     />
                     {errEmail &&
                     (<p className="text-danger">*{errEmail}</p>)
                    }
                </div>
                <div className="form-group text-left">
                  <label>Password </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={onChangePassword}
                  />
                  {errPassword &&
                     (<p className="text-danger">*{errPassword}</p>)
                    }
                </div>
                
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary">
                    Registrasi
                  </button>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Link to='/login'>Sudah punya akun ?</Link>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Register
