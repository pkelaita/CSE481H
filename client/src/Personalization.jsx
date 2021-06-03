import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

const Personalization = (props) => {
  const location = useLocation();
  const { clueNumber, images } = location.state;

  const options = [
    { value: 'Material Waste', label: 'Material Waste' },
    { value: 'Composting and Gardening', label: 'Composting and Gardening' },
    { value: 'Climate Change', label: 'Climate Change' },
    { value: 'Personal Hobbies', label: 'Personal Hobbies' },
  ];

  const handleNext = () => {
    // axios.get(url, {
    //   params: {
    //     topics: ['material waste', 'climate change']
    //   }
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
  };

  return (
    <div className="app-width">
    <h1>Select all topics that interest you</h1>
    <Select className="personalize" options={options} isMulti />
    <Link to={{
      pathname: '/clue',
      state: {
        clueNumber: 1,
        images: images,
      },
    }}
    >
        <Button icon="play" large="true" intent="primary" onClick={handleNext}>NEXT</Button>
    </Link>
    </div>
  );
};

export default Personalization;
