import React from 'react';
import './Card.scss';
import CardHeader from './CardHeader';
import KeywordSection from '../KeywordSection/KeywordSection';
import Logo from './Logo';

function Card(props) {
  const {company, logo, isNew, featured, position, role, level, postedAt, contract,
    location, languages, tools, id} = props.job;
    
  const containerClass = featured ? 'card-container card-featured': 'card-container';

  return (
    <div className={containerClass}>
      <Logo id={id} />
      <CardHeader company={company} logo={logo} isNew={isNew} featured={featured} 
        position={position} postedAt={postedAt} contract={contract}
        location={location} id={id} />
      <KeywordSection languages={languages} tools={tools} role={role} level={level} id={id} />
    </div>
  );
}

export default Card;
