import React from 'react';
import '../App.scss';
import Button from './Button';

function CardHeader(props) {
  const {company, logo, isNew, featured, position, postedAt, contract,
    location} = props
  return (
    <div className="card-header-container">
      <div className="row">
        <div className="h2">{company}</div>
        {isNew === true && (
          <Button label="NEW!" type="new" />
        )}
        {featured === true && (
          <Button label="FEATURED" type="featured" />
        )}
      </div>
      <div className="h1">{position}</div>
      <div className="row">
          <div className="summary">{postedAt}</div>
          <div className="summary">{contract}</div>
          <div className="summary">{location}</div>
      </div>
      
      <div></div>
    </div>
  );
}

export default CardHeader;
