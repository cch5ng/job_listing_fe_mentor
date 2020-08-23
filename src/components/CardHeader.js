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
