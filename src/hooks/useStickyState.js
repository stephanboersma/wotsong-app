import { useEffect, useState } from 'react';

const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    console.log(key);
    const stickyValue = window.localStorage.getItem(key);
    if (stickyValue) {
      console.log(stickyValue);
    }
    return stickyValue ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    console.log(value);
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);
  return [value, setValue];
};

export default useStickyState;
