import React from 'react'

const CardHistory = ({histories}) => {
    return (
        <div className="bg-light m-1">
            <p className="text-dark">{histories.title} {histories.action} by {histories.username} on {histories.updatedAt}</p>
            <hr/>
        </div>
    )
}

export default CardHistory
