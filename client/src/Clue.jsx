import React from 'react';
import { Button } from '@blueprintjs/core';

function Clue(props) {
  return (
    <div>
      <p>Here&apos;s your first clue:</p>
      <img alt="placeholder space" />
      <p>EVERY LITTER BIT HURTS</p>
      <p>Find the trash cans in the HUB with big screens behind them.</p>
      <Button large="true" intent="primary">START LOOKING</Button>
      <a href="www.google.com">LEARN MORE</a>
    </div>
  );
}

export default Clue;
