import React from 'react';
import '../App.scss';

function CardHeader(props) {
  const {company, logo, isNew, featured, position, postedAt, contract,
    location} = props
  return (
    <div className="card-header-container">
      <div className="row">
        <div>{company}</div>
        {isNew === true && (
          <button>NEW!</button>
        )}
        {featured === true && (
          <button>FEATURED</button>
        )}
      </div>
      <div>{position}</div>
      <div className="row">
          <div>{postedAt}</div>
          <div>{contract}</div>
          <div>{location}</div>
      </div>
      
      <div></div>
    </div>
  );
}

export default CardHeader;
