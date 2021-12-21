import React from 'react';

// simple component to palce emoji with some props easily
const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
    style={{ marginLeft: props.marginLeft + 'px', marginRight: props.marginRight + 'px' }}
  >
    {props.symbol}
  </span>
);

export { Emoji };
