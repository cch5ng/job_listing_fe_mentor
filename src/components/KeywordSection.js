import React from 'react';
import '../App.scss';
import Button from './Button';

function KeywordSection(props) {
  const {role, languages, tools, level} = props;
  return (
    <div className="keyword-section-container row">
      <Button label={role} type="keyword" />
      <Button label={level} type="keyword" />
      {languages.map(language => (
        <Button label={language} type="keyword" />
      ))}
      {tools.map(tool => (
        <Button label={tool} type="keyword" />
      ))}
    </div>
  );
}

export default KeywordSection;
