import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

function StepTwo(props) {
  return (
    <div className="app-width">
      <h1>Step One</h1>
      <p className="instruction">First, you can take a skippable personalization survey to <b>customize which clues are given to you based on your interests in sustainability.</b></p>
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
