import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getSailorCivilData } from '../../../features/sailorData/sailorsSlice';

import './Sign.css';

const Sign = ({ history }) => {

  const [localSailorNumber, setLocalSailorNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSailorCivilData(localSailorNumber));
    history.push('/dashboard');
  };

  const handleChange = (event) => {
    setLocalSailorNumber(event.target.value);
  }

  return (
    <div id="sign">
      <h2>Bonjour !</h2>
      <p>Quel est votre numéro de marin ?</p>
      <form onSubmit={event => handleSubmit(event)}>
        <div id="form-group">
          <label htmlFor="sailor-id">
            Mon numéro est
            <input
              type="text"
              name="sailor-id"
              placeholder="Exemple : 19780030"
              onChange={event => handleChange(event)}
            />
          </label>
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default withRouter(Sign);
