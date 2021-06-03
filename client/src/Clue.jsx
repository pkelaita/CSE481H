import { React, useState, useEffect } from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import Data from './ClueData';

const Clue = (props) => {
  const location = useLocation();
  const { clueNumber, locations, images } = location.state;
  let currLocation;

  const determineFirstOrNext = () => {
    let ret = 'next';
    if (clueNumber === 1) {
      ret = 'first';
    }
    console.log(locations);
    currLocation = Data[locations[clueNumber - 1]];
    console.log(currLocation);
    return ret;
  };

  const firstOrNext = determineFirstOrNext();

  return (
    <div className="app-width">
      <img alt="placeholder space for image" src={currLocation.img} />
      <div className="fact">
        <p className="bold">{currLocation.phrase}</p>
        <p>{currLocation.text[1]}</p>
        <p>{currLocation.text[2]}</p>
        <p>{currLocation.text[3]}</p>
        <p>{currLocation.text[4]}</p>
        <p className="bold">{currLocation.prompt}</p>
      </div>
      <div className="buttons">
        <Link to={{
          pathname: '/looking',
          state: {
            clueNumber: clueNumber + 1,
            locations: locations,
            images: images,
          },
        }}
        >
          <Button large="true" intent="primary">START LOOKING</Button>
        </Link>
        <a href="https://drive.google.com/file/d/1PC8HU4YvXF3Aup76MNK8PwFWefI6Qxpr/view?usp=sharing" target="_blank" rel="noreferrer">LEARN MORE</a>
      </div>
    </div>
  );
};

export default Clue;
