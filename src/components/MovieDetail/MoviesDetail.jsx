import React from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import { Container, LeftBox, RightBox, TitleText, DetailText, StarIcon, ThumbUp, MovieIcon, CalendarIcon, LeftText, RightText, Poster } from './MoviesDetailComponents';
import { Box, Typography } from '@mui/material';

export const MoviesDetail = () => {

  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const data = useSelector(getSelectedMovieOrShow)
  console.log('data', data)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow());
    }
  }, [dispatch, imdbID])
  return (
    <Container>
      {Object.keys(data).length === 0 ? <Box sx={{ color: '#fff' }}>Loading.....</Box> :
        <>
          <LeftBox>
            <TitleText>{data.Title}</TitleText>
            <Box my={3} sx={{ display: 'flex', gap: 3 }}>
              <DetailText>IMDB Rating<StarIcon />: {data.imdbRating}</DetailText>
              <DetailText>IMDB Votes<ThumbUp />: {data.imdbVotes}</DetailText>
              <DetailText>Runtime<MovieIcon />: {data.Runtime}</DetailText>
              <DetailText>Year<CalendarIcon />: {data.Year}</DetailText>
            </Box>
            <DetailText>{data.Plot}</DetailText>
            <Box mt={4}>
              <Box my={3} sx={{ display: 'flex' }}>
                <LeftText>Director</LeftText>
                <RightText>{data.Director}</RightText>
              </Box>
              <Box my={3} sx={{ display: 'flex' }}>
                <LeftText>Starts</LeftText>
                <RightText>{data.Actors}</RightText>
              </Box>
              <Box my={3} sx={{ display: 'flex' }}>
                <LeftText>Generes</LeftText>
                <RightText>{data.Genre}</RightText>
              </Box>
              <Box my={3} sx={{ display: 'flex' }}>
                <LeftText>Language</LeftText>
                <RightText>{data.Language}</RightText>
              </Box>
              <Box my={3} sx={{ display: 'flex' }}>
                <LeftText>Awards</LeftText>
                <RightText>{data.Awards}</RightText>
              </Box>
            </Box>
          </LeftBox>
          <RightBox>
            <Poster src={data.Poster} alt='Movie Poster' />
          </RightBox>
        </>
      }
    </Container>
  )
}
