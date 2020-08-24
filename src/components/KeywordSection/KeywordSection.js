import React from 'react';
import '../../App.scss';
import Button from '../Button/Button';

function KeywordSection(props) {
  const {role, languages, tools, level, id} = props;
  return (
    <div className="keyword-section-container row">
      <Button label={role} type="keyword" />
      <Button label={level} type="keyword" />
      {languages.map(language => {
        let key = `${id}-${language}`;
        return (
          <Button label={language} type="keyword" key={key}/>
        )
      })}
      {tools.map(tool => {
        let key = `${id}-${tool}`;
        return (
          <Button label={tool} type="keyword" key={key}/>
        )
      })}
    </div>
  );
}

export default KeywordSection;
