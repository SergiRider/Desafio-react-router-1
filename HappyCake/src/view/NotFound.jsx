import React from 'react'
import imagen from '../assets/img/404.jpg'

const NotFound = () => {
  return (
    <div className='not-found'>
    <img className="img-not-found" src={imagen} alt="" />
    </div>
  )
}

export default NotFound