/* eslint-disable require-jsdoc */

import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../properties/amenitiesData';

const animatedComponents = makeAnimated();

export default function Amenities() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={colourOptions}
    />
  );
}