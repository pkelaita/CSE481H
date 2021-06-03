import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';

function Result(props) {
  const location = useLocation();
  const { res } = location.state;

  return (
    <div className="app-width">
      <h1>Congratulations!</h1>
      <h2>{res}/4</h2>
      <p>You got {res} out of 4 questions correct!</p>
      <p>Please enter your email where you would like to recieve your photo collage and $10 University Bookstore giftcard.</p>
      <input className="email" type="email" />
      <div className="buttons">
        <Link to="/thankyou"><Button large="true" intent="primary">SUBMIT</Button></Link>
      </div>
      <p>Share your experience with friends and family!</p>
      <div className="social-media">
        <img alt="fb icon" src="images/fb.png" />
        <img alt="twitter icon" src="images/twitter.png" />
        <img alt="ig icon" src="images/ig.png" />
        <img alt="share icon" src="images/share.png" />
      </div>
    </div>
  );
}

export default Result;
