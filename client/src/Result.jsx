import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

function Result(props) {
  return (
    <div className="app-width">
      <p>Congratulations!</p>
      <h1>6/8</h1>
      <p>You got 6 out of 8 questions correct!</p>
      <p>Please enter your Email-ID where you would like to recieve your photo collage and $10 University Bookstore giftcard</p>
      <input type="email" />
      <div className="buttons">
        <Link to="/thankyou"><Button large="true" intent="primary">SUBMIT</Button></Link>
      </div>
      <p>Share your experience with friends and family!</p>
      {/* four social media icons */}
    </div>
  );
}

export default Result;
