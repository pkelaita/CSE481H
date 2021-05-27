import React from 'react';
import { Button } from '@blueprintjs/core';
import img from './images/flag.png';

function EndOfHunt(props) {
  return (
    <div className="app-width">
      <h1>Thank you for playing!</h1>
      <img alt="flag" src={img} className="flag" />
      <p className="location">ENVIRO-HUNT</p>
      <p className="location">@ UNIVERSITY OF WASHINGTON, SEATTLE</p>
    </div>
  );
}

export default EndOfHunt;
