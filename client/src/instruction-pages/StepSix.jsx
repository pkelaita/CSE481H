import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

function StepSix(props) {
  return (
    <div className="app-width">
      <h1>Step Five</h1>
      <p className="instruction">When you complete the hunt, review your photo album + facts before taking the quiz. You will then have <b>unlimited attempts on the quiz</b> to answer enough questions correctly.</p>
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
