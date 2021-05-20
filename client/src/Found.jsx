import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';

function Found(props) {
  const location = useLocation();
  const { clueNumber } = location.state;

  let path = '';
  let buttonText = '';

  const nextClueOrEndOfHunt = () => {
    console.log(clueNumber);
    if (clueNumber === 5) {
      path = '/endofhunt';
      buttonText = 'COMPLETE HUNT';
    } else {
      path = '/clue';
      buttonText = 'NEXT CLUE';
    }
  };

  nextClueOrEndOfHunt();

  return (
    <div className="app-width">
      <p>You found the clue!</p>
      <img alt="placeholder space" />
      <div className="buttons">
        <Button large="true" intent="primary">TAKE PHOTO</Button>
        <Link to={{
          pathname: path,
          state: location.state,
        }}
        >
          <Button large="true" intent="primary">{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
}

export default Found;
