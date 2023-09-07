import React from 'react'

const CardTwo = (props) => {
  return (

    <div className={`${props.color} container`}>  
    <h2>{props.name}</h2>
    <p>{props.body}</p>
    <img src={props.imgURL} alt='icon'/>
    </div>
  )
}

export default CardTwo