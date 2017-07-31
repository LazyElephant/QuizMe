import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/hero-bg.jpg';
import './Home.css';

const Home = () => (
  <div className="hero" style={{backgroundImage: backgroundImage}}>
    <h1>Welcome to QuizMe</ h1>
    <Link to="/cards/create" className="cta">Create Some Cards</ Link>
    <p className="Author">Photo by Aaron Burden on Unsplash</ p>
  </div>
);

export default Home;