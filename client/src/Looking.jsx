import { React, useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import img from './images/clue.png';
import Data from './ClueData';

function Looking(props) {
  const location = useLocation();
  const { clueNumber, images } = location.state;

  const watch = true;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch);

  useEffect(() => {
    console.log('your new position is:');
    console.log(latitude);
    console.log(longitude);
  });

  return (
    <div className="app-width">
      <h1>{Data[clueNumber - 2].prompt}</h1>
      latitude: {latitude}<br />
      longitude: {longitude}<br />
      speed: {speed}<br />
      timestamp: {timestamp}<br />
      accuracy: {accuracy && `${accuracy}m`}<br />
      error: {error}
      <img alt="placeholder space for image" src={img} />
      <div className="buttons">
        <Link to={{
          pathname: '/found',
          state: {
            clueNumber: clueNumber,
            images: images,
          },
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
