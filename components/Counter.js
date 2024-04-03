import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = (action) => {
    switch (action) {
      case 'Increment':
        setValue((prevState) => prevState + 1);
        break;
      case 'Decrement':
        setValue((prevState) => prevState - 1);
        break;
      case 'Reset':
        setValue(0);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <button type="button" onClick={() => handleClick('Increment')}>Increment</button>
      <button type="button" onClick={() => handleClick('Decrement')}>Decrement</button>
      <button type="button" onClick={() => handleClick('Rest')}>Reset</button>
    </>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Counter Default',
};
