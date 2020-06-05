import React from 'react';
import '../styles/TitleComponent.scss'
import propTypes from 'prop-types';
function TitleComponent(props) {
  const Tag = props.tag;
  return (
    <Tag>{props.titleContent}</Tag>
  );
}

TitleComponent.propTypes= {
  titleContent: propTypes.string.isRequired
}
export default TitleComponent;