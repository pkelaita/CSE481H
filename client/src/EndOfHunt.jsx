import React from 'react';
import { Button } from '@blueprintjs/core';

function EndOfHunt(props) {
  return (
    <div>
      <p>You completed the hunt!</p>
      <p>Good work! You’ve located and learned about all ten clues and facts scattered around the UW campus, so now it’s time to put your newfound knowledge to the test.</p>
      <p>Review your knowledge by checking out the album that you’ve been using to store your facts and memories. Afterwards, take a short quiz to redeem your custom photo collage and coupon to select sustainable products at the UW Bookstore.</p>
      <p>Answer six out of eight questions correctly to redeem your collage and coupon. You have unlimited attempts!</p>
      <Button large="true" intent="primary">REVIEW ALBUM</Button>
      <Button large="true" intent="primary">TAKE QUIZ</Button>
    </div>
  );
}

export default EndOfHunt;
