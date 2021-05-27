import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import Data from './ClueData';
import img from './images/clue.png';

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
      <img alt="placeholder space for image" src={img} />
      <div className="fact">
        <p className="bold">{Data[clueNumber - 1].phrase}</p>
        <p>{Data[clueNumber - 1].text[1]}</p>
        <p>{Data[clueNumber - 1].text[2]}</p>
        <p>{Data[clueNumber - 1].text[3]}</p>
        <p>{Data[clueNumber - 1].text[4]}</p>
        <p className="bold">{Data[clueNumber - 1].prompt}</p>
      </div>
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
