import React from 'react';
import { useStopwatch } from 'react-timer-hook';

const TimeKeeper = () => {
  const { seconds, minutes } = useStopwatch({ autoStart: true });

  return (
    <div style={{ fontSize: '20px' }}>
      <span>{minutes > 9 ? minutes : `0${minutes}`}</span>:<span>{seconds > 9 ? seconds : `0${seconds}`}</span>
    </div>
  );
};

export { TimeKeeper };
