import React from 'react';
import '../App.scss';
import Button from './Button';
//import { ReactComponent as Logo1 } from '../images/photosnap.svg';
import logo1 from '../images/photosnap.svg';
import logo2 from '../images/manage.svg';
import logo3 from '../images/account.svg';
import logo4 from '../images/myhome.svg';
import logo5 from '../images/loop-studios.svg';
import logo6 from '../images/faceit.svg';
import logo7 from '../images/shortly.svg';
import logo8 from '../images/insure.svg';
import logo9 from '../images/eyecam-co.svg';
import logo10 from '../images/the-air-filter-company.svg';

function CardHeader(props) {
  const {company, logo, isNew, featured, position, postedAt, contract,
    location, id} = props

  return (
    <div className="card-header-container">
      <div className="row card-line1">
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
