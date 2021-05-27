import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import img from '../images/clue.png';

function StepThree(props) {
  return (
    <div className="app-width">
      <h1>Step Two</h1>
      <img alt="clue" src={img} className="flag" />
      <p className="instruction">Afterwards, you will be given your first clue. Please turn on your device’s Location Services (GPS) and vibrate mode, as your phone will vibrate to notify you when you’ve reached a clue location.</p>
      <Link to={{
        pathname: '/stepfour',
      }}
      >
          <Button large="true" intent="primary">NEXT</Button>
      </Link>
    </div>
  );
}

export default StepThree;
