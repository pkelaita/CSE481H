import { React, useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import { Button } from '@blueprintjs/core';
import { Link, useLocation, Redirect } from 'react-router-dom';
import img from './images/clue.png';
import Data from './ClueData';

function Looking(props) {
  const location = useLocation();
  const { clueNumber, images } = location.state;

  const latEpsilon = 0.0020;
  const longEpsilon = 0.00070;

  const [isLooking, setIsLooking] = useState(true);

  const looking = (
    <div className="app-width">
      <h1>{Data[clueNumber - 2].prompt}</h1>
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

  const redirect = (
    <Redirect to={{
      pathname: '/found',
      state: {
        clueNumber: clueNumber,
        images: images,
      },
    }}
    />
  );

  const watch = true;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch);

  const isCloseEnough = () => {
    const latDifference = Math.abs(Math.abs(latitude) - Math.abs(Data[clueNumber - 2].lat));
    const longDifference = Math.abs(Math.abs(longitude) - Math.abs(Data[clueNumber - 2].long));

    console.log(latDifference);
    console.log(longDifference);
    if ((latDifference < latEpsilon) && (longDifference < longEpsilon)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    console.log('your new position is:');
    if (isCloseEnough()) {
      setIsLooking(false);
      console.log('redirecting');
    }
    console.log(latitude);
    console.log(longitude);
  });

  return (
    <div>
      { isLooking ? looking : redirect }
    </div>
  );
}

export default Looking;
