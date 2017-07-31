import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css";

const Nav = ({className}) => (
  <nav className={["Nav", className].join(' ').trim()} >
    <NavLink to="/" className="Nav-link Nav-brand">QuizMe</ NavLink>
    <NavLink to="/cards" className="Nav-link" >Cards</ NavLink>
    <NavLink to="/quiz-me" className="Nav-link" >Quiz</ NavLink>
  </nav>
);

export default Nav;