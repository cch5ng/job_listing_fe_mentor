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

  const renderLogo = () => {
    if (id === 1) {
      return (<img src={logo1} style={{height: '50px'}} />)
    }
    if (id === 2) {
      return (<img src={logo2} style={{height: '50px'}} />)
    }
    if (id === 3) {
      return (<img src={logo3} style={{height: '50px'}} />)
    }
    if (id === 4) {
      return (<img src={logo4} style={{height: '50px'}} />)
    }
    if (id === 5) {
      return (<img src={logo5} style={{height: '50px'}} />)
    }
    if (id === 6) {
      return (<img src={logo6} style={{height: '50px'}} />)
    }
    if (id === 7) {
      return (<img src={logo7} style={{height: '50px'}} />)
    }
    if (id === 8) {
      return (<img src={logo8} style={{height: '50px'}} />)
    }
    if (id === 9) {
      return (<img src={logo9} style={{height: '50px'}} />)
    }
    if (id === 10) {
      return (<img src={logo10} style={{height: '50px'}} />)
    }
  }

  return (
    <div className="card-header-container">
      <div className="logo">
        {renderLogo()}
      </div>
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
