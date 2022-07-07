import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';

const NoMatch = () => (
  <div className="noMatch">
    <FaRegSadTear />
    <h1>Not Found</h1>
    <h2>404 ERROR</h2>
    <div>Please try another URL.</div>
  </div>
);

export default NoMatch;
