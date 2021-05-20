import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';

function Looking(props) {
  const location = useLocation();
  const { clueNumber } = location.state;

  return (
    <div className="app-width">
      <p>Find the trash cans in the HUB with big screens behind them.</p>
      <img alt="placeholder space for image" />
      <div className="buttons">
        <Link to={{
          pathname: '/found',
          state: location.state,
        }}
        >
          <Button large="true" intent="primary">MAP</Button>
        </Link>
        <a href="www.google.com">HELP</a>
      </div>
    </div>
  );
}

export default Looking;
