import React from 'react'
import logo from '../Images/movie-logo.jpeg'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img src={logo} alt='movie-logo' className='w-[50px] rounded-full'/>
        <h3>Movies</h3>
        <h3>Watchlist</h3>
    </div>
  )
}

export default Navbar