import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import img from '../images/clue.png';

function StepTwo(props) {
  return (
    <div className="app-width">
      <h1>Step One</h1>
      <img alt="clue" src={img} className="flag" />
      <p className="instruction">First, you can take a skippable personalization survey to customize which clues are given to you based on your interests in sustainability.</p>
      <Link to={{
        pathname: '/stepthree',
      }}
      >
          <Button large="true" intent="primary">NEXT</Button>
      </Link>
    </div>
  );
}

export default StepTwo;