import { useHistory } from 'react-router-dom';

export default (key, defaultValue) => {
  const history = useHistory();

  const q = new URLSearchParams(window.location.search);
  const value = q.get(key) || defaultValue;
  const setValue = v => {
    const queries = new URLSearchParams(window.location.search);
    queries.set(key, v);
    history.push({
      pathname: window.location.pathname,
      search: `?${queries.toString()}`,
    });
  };
  return [value, setValue];
};
