import React from 'react';
import '../App.scss';
import Button from './Button';
import { ReactComponent as Logo1 } from '../images/photosnap.svg';
import { ReactComponent as Logo2 } from '../images/manage.svg';
import { ReactComponent as Logo3 } from '../images/account.svg';
import { ReactComponent as Logo4 } from '../images/myhome.svg';
import { ReactComponent as Logo5 } from '../images/loop-studios.svg';
import { ReactComponent as Logo6 } from '../images/faceit.svg';
import { ReactComponent as Logo7 } from '../images/shortly.svg';
import { ReactComponent as Logo8 } from '../images/insure.svg';
import { ReactComponent as Logo9 } from '../images/eyecam-co.svg';
import { ReactComponent as Logo10 } from '../images/the-air-filter-company.svg';

function CardHeader(props) {
  const {company, logo, isNew, featured, position, postedAt, contract,
    location, id} = props

  const renderLogo = () => {
    if (id === 1) {
      return (<Logo1 title="company logo" className="logo" />)
    }
    if (id === 2) {
      return (<Logo2 title="company logo" className="logo" />)
    }
    if (id === 3) {
      return (<Logo3 />)
    }
    if (id === 4) {
      return (<Logo4 />)
    }
    if (id === 5) {
      return (<Logo5 />)
    }
    if (id === 6) {
      return (<Logo6 />)
    }
    if (id === 7) {
      return (<Logo7 />)
    }
    if (id === 8) {
      return (<Logo8 />)
    }
    if (id === 9) {
      return (<Logo9 />)
    }
    if (id === 10) {
      return (<Logo10 />)
    }
  }

  return (
    <div className="card-header-container">
      <div className="logo">
        {renderLogo()}
      </div>
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
