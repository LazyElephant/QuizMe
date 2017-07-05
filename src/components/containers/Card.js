import React from 'react';

const Card = ({children, className}) => <div className={["card", className].join(' ')}> { children } </div>

export default Card;