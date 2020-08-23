import React from 'react';
import '../App.scss';

function CardHeader(props) {
  const {company, logo, isNew, featured, position, postedAt, contract,
    location} = props
  return (
    <div className="card-header">
      <div>{company}</div>
      {isNew === true && (
        <button>NEW!</button>
      )}
      {featured === true && (
        <button>FEATURED</button>
      )}

      <div>{position}</div>
      
      <div></div>
    </div>
  );
}

export default CardHeader;
