import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import img from './images/clue.png';
import Data from './ClueData';
/* import { geolocated } from "react-geolocated"; */

function Looking(props) {
  const location = useLocation();
  const { clueNumber, images } = location.state;

  /*  return !this.props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : this.props.coords ? ( */
  return (
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
  /* ) : (
            <div>Getting the location data&hellip; </div>
    ); */
}

export default Looking;
