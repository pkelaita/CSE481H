import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

function Home(props) {
  const imageList = [0, 0, 0, 0];

  return (
    <div className="app-width">
      <p className="hunt">enviro-hunt</p>
      <p className="location">@ UNIVERSITY OF WASHINGTON</p>
      <img className="start-screen" src="images/start_screen.png" alt="UW logo" />
      <div className="buttons">
        <Link to={{
          pathname: '/personalization',
          state: {
            clueNumber: 1,
            images: imageList,
          },
        }}
        >
          <Button large="true" intent="primary"> START</Button>
        </Link>
        <Link to={{
          pathname: '/stepone',
        }}
        >
          <Button large="true" intent="primary">  HOW TO PLAY</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
