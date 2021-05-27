import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import img from '../images/clue.png';

function StepFive(props) {
  return (
    <div className="app-width">
      <h1>Step Four</h1>
      <img alt="clue" src={img} className="flag" />
      <p className="instruction">Your phone will <b>vibrate and notify you that you’ve found a clue.</b> At this point, take a selfie or picture at the location to save in your photo album.</p>
      <p className="instruction">The corresponding clue + fact will be written on the back of each photo, and you’ll have the chance to review all of your photos and facts at the end of the hunt.</p>
      <p className="instruction">These will also be the photos we use to create your custom collage!</p>
      <Link to={{
        pathname: '/stepsix',
      }}
      >
          <Button large="true" intent="primary">NEXT</Button>
      </Link>
    </div>
  );
}

export default StepFive;
