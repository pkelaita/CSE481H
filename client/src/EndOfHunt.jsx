import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';

function EndOfHunt(props) {
  const location = useLocation();
  const { clueNumber, locations, images } = location.state;

  return (
    <div className="app-width">
      <h1>You completed the hunt!</h1>
      <p>Good work! You’ve located and learned about all four clues and facts scattered around the UW campus, so now it’s time to put your newfound knowledge to the test.</p>
      <p>Review your knowledge by checking out the album that you’ve been using to store your facts and memories. Afterwards, take a short quiz to redeem your custom photo collage and coupon to select sustainable products at the UW Bookstore.</p>
      <p><b>Answer three out of four questions correctly to redeem your collage and coupon. You have unlimited attempts!</b></p>
      <div className="buttons">
        <Link to={{
          pathname: '/album',
          state: {
            locations: locations,
            images: images,
          },
        }}
        >
          <Button large="true" intent="primary">REVIEW ALBUM</Button>
        </Link>
        <Link to={{
          pathname: '/quiz',
          state: {
            locations: locations,
          },
        }}
        >
          <Button large="true" intent="primary">TAKE QUIZ</Button>
        </Link>
      </div>
    </div>
  );
}

export default EndOfHunt;
