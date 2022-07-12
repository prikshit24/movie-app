import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { CardContainer, Poster, TextBox, TileText } from './MovieCardComponents';

export const MovieCard = (props) => {

  const { data } = props;
  return (
    <>
      <CardContainer>
        <Link to={`/movies/${data.imdbID}`} style={{textDecoration: 'none'}}>
        <Poster src={data.Poster} alt={data.Title} />
        <TextBox>
          <TileText color="text.primary" >{data.Title}</TileText>
          <Typography color="text.primary">{data.Year}</Typography>
        </TextBox>
        </Link>
      </CardContainer>
    </>
  )
}
