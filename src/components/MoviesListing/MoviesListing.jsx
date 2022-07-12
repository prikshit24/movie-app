import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import { Box, Typography } from '@mui/material';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesListing = () => {

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies, renderShows = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, ind) => (
      <MovieCard key={ind} data={movie} />
    ))
  ) : (
    <Typography>{movies.Error}</Typography>
  )

  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie, ind) => (
      <MovieCard key={ind} data={movie} />
    ))
  ) : (
    <Typography>{shows.Error}</Typography>
  )

  return (
    <>
      <Box py={2}>
        <Typography my={3} variant='h5' color="text.primary">Movies</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: 5 }}>{renderMovies}</Box>
      </Box>
      <Box pb={3}>
        <Typography my={3} variant='h5' color="text.primary">Shows</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: 5 }}>{renderShows}</Box>
      </Box>
    </>
  )
}
