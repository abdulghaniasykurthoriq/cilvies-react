import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

    const globalUser = useSelector(state => state.userReducer)
    console.log('dashboard',globalUser.data.data)

    const name = localStorage.getItem('name')
    return (
        <div>
            {/* <h1>{globalUser}</h1> */}
            <h3 className="text-light">Wellcome to Dashboard</h3>
            <h1 className="text-light">{name}</h1>
        </div>
    )
}

export default Dashboard
