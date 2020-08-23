import React from 'react';
import '../App.scss';

function Button(props) {
  const {label, type} = props;
  let classStr = `button-${type}`;
  return (
    <button className={classStr}>
      {label}
    </button>
  );
}

export default Button;
