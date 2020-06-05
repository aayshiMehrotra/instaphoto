import React from 'react';
import '../styles/CreateAccount.scss'
import propTypes from 'prop-types';
import TitleComponent from './TitleComponent';
function CreateAccount(props) {
  const handleSubmit =(event)=> {
    
    event.preventDefault();
    const req= {
      src: event.target.elements.link.value,
      description: event.target.elements.description.value
    }
    props.formSubmit(req);
  }
  return (
    <div className="account-wrapper">
      <TitleComponent tag={props.tag} titleContent={props.titleContent}></TitleComponent>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input type="text" placeholder="Link" name="link" />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Description" name="description"/>
        </fieldset>
        <fieldset>
        <input type="submit" value="Add Post!" />
        </fieldset>
        
      </form>
    </div>
    );
}

CreateAccount.propTypes= {
  titleContent: propTypes.string.isRequired
}
export default CreateAccount;