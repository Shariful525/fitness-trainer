import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import Trainer from './pages/trainer/Trainer';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';


const App = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Home />
            <About />
            <Contact />
            <Gallery />
            <Plans />
            <Trainer />
            <NotFound />
        </BrowserRouter>
    );
};


export default App;