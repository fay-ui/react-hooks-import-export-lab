// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user'; // Importing named exports

function Home() {
    return (
        <div id="home">
            <h2>Welcome to My Portfolio</h2>
            <p>Username: {username}</p>
            <p>City: {city}</p>
        </div>
    );
}

export default Home; // Default export
