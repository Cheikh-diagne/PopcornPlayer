import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NoPage from './components/pages/NoPage';
import HomePage from './components/pages/HomePage';
import FilmCategoriesPage from './components/pages/FilmsCategoriesPage';
import FilmPage from './components/pages/FilmPage';
import SearchPage from './components/pages/SearchPage';
import Banner from './components/Banner';
import NavBar from './components/Navbar';
// import Navbar from "./components/navBar";

function App() {
    return (
            <Router>
              <NavBar/>
                <Banner/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/categories" element={<FilmCategoriesPage/>}/>
                    <Route path="/movies/:id" element={<FilmPage/>}/>
                    <Route path="/search/movies/:title" element={<SearchPage/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </Router>
    );
}

export default App