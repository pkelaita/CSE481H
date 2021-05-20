import React from 'react';
import { Button } from '@blueprintjs/core';

function Found(props) {
  return (
    <div>
      <p>You found the clue!</p>
      <img alt="placeholder space" />
      <Button large="true" intent="primary">TAKE PHOTO</Button>
      <Button large="true" intent="primary">NEXT CLUE</Button>
    </div>
  );
}

export default Found;
