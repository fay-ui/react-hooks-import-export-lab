// src/components/About.js
import React from 'react';
import { image } from '../data/user'; // Import the image variable

function About() {
    return (
        <div id="about">
            <h2>About</h2>
            <img src={image} alt="About Me" />
            <p>This is the About section of the portfolio.</p>
        </div>
    );
}

export default About; // Default export
