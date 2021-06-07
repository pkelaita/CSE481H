import React, { useState } from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import Data from './ClueData';

function Album(props) {
  const location = useLocation();
  const { clueNumber, locations, images, fromFailed, res } = location.state;
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [path, setPath] = useState('');

  const flipCard1 = (e) => {
    e.preventDefault();
    setIsFlipped1(!isFlipped1);
  };
  const flipCard2 = (e) => {
    e.preventDefault();
    setIsFlipped2(!isFlipped2);
  };
  const flipCard3 = (e) => {
    e.preventDefault();
    setIsFlipped3(!isFlipped3);
  };
  const flipCard4 = (e) => {
    e.preventDefault();
    setIsFlipped4(!isFlipped4);
  };

  const setPathHook = () => {
    if (fromFailed) {
      setPath('./failedquiz');
    } else {
      setPath('./endofhunt');
    }
  };

  return (
    <div className="app-width">
      <h1>Here&apos;s your album of photos and facts!</h1>
      <p>Click on each photo/fact card below to view the other side</p>

        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
            <img src={images[0]} alt="image" className="photo" onClick={flipCard1} />

            <div className="fact-card" onClick={flipCard1}>
              <p>{Data[locations[0]].phrase}</p>
              <p>{Data[locations[0]].short}</p>
            </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
            <img src={images[1]} alt="image" className="photo" onClick={flipCard2} />

            <div className="fact-card" onClick={flipCard2}>
              <p>{Data[locations[1]].phrase}</p>
              <p>{Data[locations[1]].short}</p>
            </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
            <img src={images[2]} alt="image" className="photo" onClick={flipCard3} />

            <div className="fact-card" onClick={flipCard3}>
              <p>{Data[locations[2]].phrase}</p>
              <p>{Data[locations[2]].short}</p>
            </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
            <img src={images[3]} alt="image" className="photo" onClick={flipCard4} />

            <div className="fact-card" onClick={flipCard4}>
              <p>{Data[locations[3]].phrase}</p>
              <p>{Data[locations[3]].short}</p>
            </div>
        </ReactCardFlip>

        <Link to={{
          pathname: path,
          state: {
            clueNumber: -1,
            locations: locations,
            images: images,
            fromFailed: null,
            res: -1,
          },
        }}
        >
          <Button large="true" intent="primary" onClick={setPathHook}>BACK</Button>
        </Link>

    </div>
  );
}

export default Album;
