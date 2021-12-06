import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useReload = () => {
  const history = useHistory();

  return useCallback(() => history.push(history.location.pathname), [history]);
};

export { useReload };
