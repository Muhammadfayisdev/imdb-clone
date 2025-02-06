import React from 'react'
import logo from '../Images/movie-logo.jpeg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img src={logo} alt='movie-logo' className='w-[50px] rounded-full'/>
        <h3><Link to="/">Movies</Link></h3>
        <h3><Link to="/watchlist">Watchlist</Link></h3>
        <h3><Link to="/recent">Recent</Link></h3>
    </div>
  )
}

export default Navbar