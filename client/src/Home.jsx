import React from 'react';
import { Button } from '@blueprintjs/core';

function Home(props) {
  return (
    <div>
      <p className="hunt">enviro-hunt</p>
      <p>@ UNIVERSITY OF WASHINGTON, SEATTLE</p>
      <div className="buttons">
        <Button icon="play" large="true" intent="primary">START</Button>
        <Button icon="manual" large="true" intent="primary">HOW TO PLAY</Button>
      </div>
    </div>
  );
}

export default Home;
