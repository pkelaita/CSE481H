import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
/* import { geolocated } from "react-geolocated"; */

function Looking(props) {
  const location = useLocation();
  const { clueNumber } = location.state;

  /*  return !this.props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : this.props.coords ? ( */
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
  /* ) : (
            <div>Getting the location data&hellip; </div>
    ); */
}

export default Looking;
