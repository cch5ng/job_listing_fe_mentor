import React from 'react';
import '../App.scss';

function Button(props) {
  const {label, type} = props;
  let classStr = `button-${type}`;
  if (type === 'new' || type === 'featured') {
    classStr += ' button';
  }
  return (
    <button className={classStr}>
      {label}
    </button>
  );
}

export default Button;
