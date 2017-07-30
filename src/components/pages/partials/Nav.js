import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css";

const Nav = ({className}) => (
  <nav className={["Nav", className].join(' ').trim()} >
    <NavLink to="/" className="Nav-link Nav-brand">QuizMe</ NavLink>
    <NavLink to="/cards" className="Nav-link" >My Cards</ NavLink>
    <NavLink to="/quiz-me" className="Nav-link Nav-right">Take a Quiz</ NavLink>
  </nav>
);

export default Nav;