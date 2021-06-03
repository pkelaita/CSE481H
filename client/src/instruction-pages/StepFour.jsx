import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

function StepFour(props) {
  return (
    <div className="app-width">
      <h1>Step Three</h1>
      <p className="instruction">To display UW’s campus map, click on the “Map” button. If you need additional help, click on the “i” button at the top right corner of the screen, and then “Help.”</p>
      <Link to={{
        pathname: '/stepfive',
      }}
      >
          <Button large="true" intent="primary">NEXT</Button>
      </Link>
    </div>
  );
}

export default StepFour;
