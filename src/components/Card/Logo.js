import React from 'react';
import './Card.scss';
import logo1 from '../../images/photosnap.svg';
import logo2 from '../../images/manage.svg';
import logo3 from '../../images/account.svg';
import logo4 from '../../images/myhome.svg';
import logo5 from '../../images/loop-studios.svg';
import logo6 from '../../images/faceit.svg';
import logo7 from '../../images/shortly.svg';
import logo8 from '../../images/insure.svg';
import logo9 from '../../images/eyecam-co.svg';
import logo10 from '../../images/the-air-filter-company.svg';

function Logo(props) {
  const {id} = props

  const renderLogo = () => {
    if (id === 1) {
      return (<img src={logo1} alt="company logo"/>)
    }
    if (id === 2) {
      return (<img src={logo2} alt="company logo"/>)
    }
    if (id === 3) {
      return (<img src={logo3} alt="company logo"/>)
    }
    if (id === 4) {
      return (<img src={logo4} alt="company logo"/>)
    }
    if (id === 5) {
      return (<img src={logo5} alt="company logo"/>)
    }
    if (id === 6) {
      return (<img src={logo6} alt="company logo"/>)
    }
    if (id === 7) {
      return (<img src={logo7} alt="company logo"/>)
    }
    if (id === 8) {
      return (<img src={logo8} alt="company logo"/>)
    }
    if (id === 9) {
      return (<img src={logo9} alt="company logo"/>)
    }
    if (id === 10) {
      return (<img src={logo10} alt="company logo"/>)
    }
  }

  return (
    <div className="logo">
      {renderLogo()}
    </div>
  );
}

export default Logo;
