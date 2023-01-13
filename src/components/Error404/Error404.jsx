import React from 'react'
import { Link } from 'react-router-dom'
import "./Error404.css"

const Error404 = () => {
  return (
    <div className='container-404'>
        <h1>Error 404</h1>
        <p>not found</p>
        <Link to={'/'}>Go Home</Link>
    </div>
  )
}

export default Error404