import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import fb from './images/fb.png';
import twitter from './images/twitter.png';
import ig from './images/ig.png';
import share from './images/share.png';

function Result(props) {
  return (
    <div className="app-width">
      <h1>Congratulations!</h1>
      <h2>3/4</h2>
      <p>You got 3 out of 4 questions correct!</p>
      <p>Please enter your email where you would like to recieve your photo collage and $10 University Bookstore giftcard.</p>
      <input className="email" type="email" />
      <div className="buttons">
        <Link to="/thankyou"><Button large="true" intent="primary">SUBMIT</Button></Link>
      </div>
      <p>Share your experience with friends and family!</p>
      <div className="social-media">
        <img alt="fb icon" src={fb} />
        <img alt="twitter icon" src={twitter} />
        <img alt="ig icon" src={ig} />
        <img alt="share icon" src={share} />
      </div>
    </div>
  );
}

export default Result;
