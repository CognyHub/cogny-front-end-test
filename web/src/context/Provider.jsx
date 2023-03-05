/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import { carQuantity } from '../utils/fuctions';

function Provider({ children }) {
  const [totalCar, setTotalCar] = useState(carQuantity());

  // useEffect(() => { }, []);

  const context = useMemo(() => ({
    totalCar,
    setTotalCar,
  }), [totalCar]);

  return (
    <MyContext.Provider value={context}>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
