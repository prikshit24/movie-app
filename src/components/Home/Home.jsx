import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { MoviesListing } from '../MoviesListing/MoviesListing'
import { useDispatch } from 'react-redux';
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

export const Home = () => {

  const dispatch = useDispatch();
  const movieText = 'Marvel';
  const seriesText = 'Vampire';

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(seriesText));
    }
    fetchMovies();
  }, [dispatch])

  return (
    <>
      {/* <Typography color="text.secondary">Home</Typography> */}
      <MoviesListing />
    </>
  )
}
