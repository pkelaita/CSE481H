import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';

const Clue = (props) => {
  const location = useLocation();
  const { clueNumber } = location.state;

  const determineFirstOrNext = () => {
    let ret = 'next';
    if (clueNumber === 1) {
      ret = 'first';
    }
    return ret;
  };

  const firstOrNext = determineFirstOrNext();

  return (
    <div className="app-width">
      <h1>Here&apos;s your {firstOrNext} clue:</h1>
      <img alt="placeholder space for image" />
      <p>EVERY LITTER BIT HURTS</p>
      <p>placeholder for fact</p>
      <p>Find the trash cans in the HUB with big screens behind them.</p>
      <div className="buttons">
        <Link to={{
          pathname: '/looking',
          state: {
            clueNumber: clueNumber + 1,
          },
        }}
        >
          <Button large="true" intent="primary">START LOOKING</Button>
        </Link>
        <a href="www.google.com">LEARN MORE</a>
      </div>
    </div>
  );
};

export default Clue;
