import React from 'react'
import { CDN_URL } from '../utils/Constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className=''>
      <img className='w-32 mr-4' src={CDN_URL + poster_path} alt="" srcset="" />
    </div>
  )
}

export default MovieCard