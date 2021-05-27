import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import img from '../images/clue.png';

function StepSix(props) {
  return (
    <div className="app-width">
      <h1>Step Five</h1>
      <img alt="clue" src={img} className="flag" />
      <p className="instruction">When you complete the hunt, review your photo album + facts before taking the quiz. You will then have unlimited attempts on the quiz to answer enough questions correctly.</p>
      <Link to={{
        pathname: '/',
      }}
      >
          <Button large="true" intent="primary">BACK TO HOME</Button>
      </Link>
    </div>
  );
}

export default StepSix;
