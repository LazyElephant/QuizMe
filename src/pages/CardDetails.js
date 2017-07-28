import React from 'react';

const CardDetails = (props) => (
  <div>Card Details for {props.match.params.id}</div>
);

export default CardDetails;