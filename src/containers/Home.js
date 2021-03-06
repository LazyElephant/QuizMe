import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="hero">
    <h1>Welcome to QuizMe</ h1>
    <Link to="/cards" className="cta">Get Started Here</ Link>
    <p className="Author">Photo by Aaron Burden on Unsplash</ p>
  </div>
);

export default Home;