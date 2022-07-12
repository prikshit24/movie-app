import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApis from '../../Apis/movieApis'
import { APIKey } from '../../Apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (term) => {
        const response = await movieApis.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
            .catch((err) => {
                console.log("Err :", err);
            })
        return response.data
    }
)

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async (term) => {
        const response = await movieApis.get(`?apiKey=${APIKey}&s=${term}&type=series`)
            .catch((err) => {
                console.log("Err :", err);
            })
        return response.data
    }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',
    async (id) => {
        const response = await movieApis.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data
    }
)

const initialState = {  
    movies: {},
    shows: {},
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("movies fulfilled")
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("shows fulfilled")
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("fetchAsyncMovieOrShowDetail fulfilled")
            return { ...state, selectMovieOrShow: payload }
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;