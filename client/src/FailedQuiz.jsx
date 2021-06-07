import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';

function FailedQuiz(props) {
  const location = useLocation();
  const { clueNumber, locations, images, fromFailed, res } = location.state;

  return (
    <div className="app-width">
      <h1>Oh no!</h1>
      <p>You got {res} out of 4 questions correct, but you need at least 3 to win the collage and voucher. Review your album and try again!</p>
      <div className="buttons">
        <Link to={{
          pathname: '/album',
          state: {
            clueNumber: -1,
            locations: locations,
            images: images,
            fromFailed: true,
            res: -1,
          },
        }}
        >
          <Button large="true" intent="primary">REVIEW ALBUM</Button>
        </Link>
        <Link to={{
          pathname: '/quiz',
          state: {
            clueNumber: -1,
            locations: locations,
            images: images,
            fromFailed: null,
            res: -1,
          },
        }}
        >
          <Button large="true" intent="primary">TAKE QUIZ</Button>
        </Link>
      </div>
    </div>
  );
}

export default FailedQuiz;
