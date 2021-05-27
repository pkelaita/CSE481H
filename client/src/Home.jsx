import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="app-width">
      <p className="hunt">enviro-hunt</p>
      <p className="location">@ UNIVERSITY OF WASHINGTON</p>
      <div className="buttons">
        <Link to={{
          pathname: '/clue',
          state: {
            clueNumber: 1,
          },
        }}
        >
          <Button icon="play" large="true" intent="primary"> START</Button>
        </Link>
        <Button icon="manual" large="true" intent="primary"> HOW TO PLAY</Button>
      </div>
    </div>
  );
}

export default Home;
