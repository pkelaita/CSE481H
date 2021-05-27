import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

function Result(props) {
  return (
    <div className="app-width">
      <h1>Congratulations!</h1>
      <h2>3/4</h2>
      <p>You got 3 out of 4 questions correct!</p>
      <p>Please enter your email where you would like to recieve your photo collage and $10 University Bookstore giftcard.</p>
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
