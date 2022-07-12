import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MoviesDetail } from './components/MovieDetail/MoviesDetail';
import { Home } from './components/Home/Home';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Footer } from './components/Footer/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Box sx={{backgroundColor:'#03090e', padding:'0px 40px', height:'100%', minHeight:'90vh'}}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies/:imdbID" element={<MoviesDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
