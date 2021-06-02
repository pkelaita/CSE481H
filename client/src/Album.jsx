import React, { useState } from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

function Album(props) {
  const location = useLocation();
  const { images } = location.state;
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

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

  return (
    <div className="app-width">
      <h1>Here&apos;s your album of photos and facts!</h1>

        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
            <img src={images[0]} alt="image" className="photo" onClick={flipCard1} />

            <div className="fact-card" onClick={flipCard1}>
                <p>phrase</p>
                <p>fact para 1</p>
                <p>fact para 2</p>
            </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
            <img src={images[1]} alt="image" className="photo" onClick={flipCard2} />

            <div className="fact-card" onClick={flipCard2}>
                <p>phrase</p>
                <p>fact para 1</p>
                <p>fact para 2</p>
            </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
            <img src={images[2]} alt="image" className="photo" onClick={flipCard3} />

            <div className="fact-card" onClick={flipCard3}>
                <p>phrase</p>
                <p>fact para 1</p>
                <p>fact para 2</p>
            </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
            <img src={images[3]} alt="image" className="photo" onClick={flipCard4} />

            <div className="fact-card" onClick={flipCard4}>
                <p>phrase</p>
                <p>fact para 1</p>
                <p>fact para 2</p>
            </div>
        </ReactCardFlip>

        <Link to={{
          pathname: '/endofhunt',
          state: {
            images: images,
          },
        }}
        >
          <Button large="true" intent="primary">BACK</Button>
        </Link>

    </div>
  );
}

export default Album;
