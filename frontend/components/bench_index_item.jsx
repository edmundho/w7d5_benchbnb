
import React from 'react';

const BenchIndexItem = props => (
  <div>
    <h3>{props.bench.description}</h3>
    <ul>
      <li>{props.bench.lat}</li>
      <li>{props.bench.lng}</li>
    </ul>
  </div>
);

export default BenchIndexItem;