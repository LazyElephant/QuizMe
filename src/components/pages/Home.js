import React from 'react';
import { 
  Link 
} from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <Link to="/about">Learn More</Link>
    <Link to="/cards/create">Create Cards</Link>    
  </div>
);

export default Home;