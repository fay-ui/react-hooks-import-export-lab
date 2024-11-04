// src/components/App.js
import React from 'react';
import Navbar from './Navbar'; // Make sure the path is correct
import Home from './Home';
import About from './About';

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
        </div>
    );
}

export default App;
