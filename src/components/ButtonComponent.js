import React from 'react';
import '../styles/ButtonComponent.scss'
import propTypes from 'prop-types';
function ButtonComponent(props) {
  return (
    <button onClick={props.clickHandler} className={props.variation}>{props.children}</button>
  );
}

ButtonComponent.propTypes= {
  variation: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired
}
export default ButtonComponent;