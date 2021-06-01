import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import img from '../images/clue.png';

function StepOne(props) {
  return (
    <div className="app-width">
      <h1>What is Enviro-hunt?</h1>
      <img alt="clue" src={img} className="flag" />
      <p className="instruction">Enviro-hunt is a <b>sustainability based scavenger hunt</b> that takes you on a self guided tour around the UW campus. The hunt is estimated to take <b>30 to 40 minutes.</b> As you find each clue, you’ll learn more about sustainability while having fun!</p>
      <p className="instruction">At the end of the hunt, you will be <b>quizzed</b> on all of the new knowledge you have gained. By answering a majority of the questions correctly, you will redeem a <b>custom photo collage of your adventure around campus and a coupon to the UW Bookstore.</b> Happy hunting!</p>
      <Link to={{
        pathname: '/steptwo',
      }}
      >
          <Button large="true" intent="primary">NEXT</Button>
      </Link>
    </div>
  );
}

export default StepOne;
