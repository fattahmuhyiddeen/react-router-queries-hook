import { useHistory } from 'react-router-dom';

export default (key, defaultValue, datatype = 'string') => {
  const history = useHistory();

  const q = new URLSearchParams(window.location.search);
  let value = q.get(key) || defaultValue;
  if (datatype === 'number') value = +value;
  const setValue = v => {
    const queries = new URLSearchParams(window.location.search);
    if (typeof v === 'undefined' || v == null || v === '') queries.delete(key);
    else queries.set(key, v);
    history.push({
      pathname: window.location.pathname,
      search: `?${queries.toString()}`,
    });
  };
  return [value, setValue];
};
