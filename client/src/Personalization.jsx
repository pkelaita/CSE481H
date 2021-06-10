import { React, useState } from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation, Redirect } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

import { serverUrl } from './constants';

const Personalization = (props) => {
  const location = useLocation();
  const { clueNumber, images } = location.state;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [locationsToSend, setLocationsToSend] = useState([]);
  const [show, setShow] = useState(true);

  const options = [
    { value: 0, label: 'Carbon Emissions' },
    { value: 1, label: 'Composting' },
    { value: 2, label: 'Microplastics' },
    { value: 3, label: 'Gardening' },
    { value: 4, label: 'Climate Change' },
    { value: 5, label: 'Environmental Effects of Art' },
    { value: 6, label: 'Material Waste' },
    { value: 7, label: 'Personal Hobbies' },
  ];

  const handleNext = () => {
    axios
      .post(`${serverUrl}/api/personalization`, {
        options: selectedOptions,
      })
      .then((response) => {
        setLocationsToSend(response.data);
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (so) => {
    if (so !== selectedLocations) {
      setSelectedOptions(so);
      const temp = [false, false, false, false, false, false, false, false];
      for (let i = 0; i < so.length; i++) {
        temp[so[i].value] = true;
      }
      setSelectedOptions(temp);
      console.log(selectedOptions);
    }
  };

  const rest = (
    <div className="app-width">
      <h1>Select all topics that interest you:</h1>
      <Select
        className="personalize"
        options={options}
        isMulti
        onChange={handleChange}
      />
      <Button large="true" intent="primary" onClick={handleNext}>
        NEXT
      </Button>
    </div>
  );

  const redirect = (
    <Redirect
      to={{
        pathname: '/clue',
        state: {
          clueNumber: 1,
          locations: locationsToSend,
          images: images,
          fromFailed: null,
          res: -1,
        },
      }}
    />
  );

  return <div>{show ? rest : redirect}</div>;
};

export default Personalization;
