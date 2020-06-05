import React from 'react';
import '../styles/PhotoLibrary.scss';
import ButtonComponent from './ButtonComponent';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
function PhotoLibrary(props) {

  return (
    <div className={`photo-library-wrapper ${props.className ? `photo-library-wrapper__${props.className}` : ``}`}>
      <div className="photo-library-wrapper__inner">
      <Link to={`/comment/post/${props.id}`}>
          <img src={props.src} alt={props.alt} />
      </Link>
      </div>
      <div className="photo-library-wrapper__description">
          <p>{props.description}</p>
      </div>
      <div className="photo-library-wrapper__button">
          <ButtonComponent clickHandler={props.clickHandler} variation="remove-btn">Remove</ButtonComponent>
      </div>

      </div>
  );
}
PhotoLibrary.propTypes= {
  src: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired
}
export default PhotoLibrary;