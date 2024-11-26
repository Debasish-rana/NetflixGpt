import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'


const MainContainer = () => {
const movies = useSelector((state)=>state.movies.nowPlayingMovies)
if (!movies) return                      
const mainmovie = movies[0]
console.log(mainmovie);
const { original_title, overview, id } = mainmovie
  return (
    <div className=''>
      <VideoTitle title = {original_title} overview = {overview}/>
      <VideoBackground movieId={id}/>
    </div> 
  )
}

export default MainContainer
