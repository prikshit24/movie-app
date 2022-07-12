import { Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderBox, UserIcon, SearchBox, Search, SearchField } from './headerComponents';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

export const Header = () => {

  const [search,setSearch] = useState();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(search));
    setSearch("")
  }

  return (
    <>
      <HeaderBox>
        <Typography variant={'h6'} color='text.secondary' onClick={() => { navigator('/') }}>Movie App</Typography>
        <SearchBox>
            <SearchField variant='outlined' label="Search Movie or Show" color="info" onChange={(e) => setSearch(e.target.value)} />
            <Button variant='contained' onClick={(e) => handleSearch(e)}><Search />Search</Button>
        </SearchBox>
        <UserIcon />
      </HeaderBox>
    </>
  )
}
