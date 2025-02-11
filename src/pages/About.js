// src/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li><Link to="/project/1">Project 1: Weather App</Link></li>
        <li><Link to="/project/2">Project 2: Fitness Tracker</Link></li>
        <li><Link to="/project/3">Project 3: Expense Manager</Link></li>
      </ul>
    </div>
  );
};

export default About;
