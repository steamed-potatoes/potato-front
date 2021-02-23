import { useState } from 'react';

export const useInput = (options) => {
  const { initialValue } = options || {};

  const [value, setValue] = useState(initialValue || '');

  const onChangeInput = (e) => {
    const targetValue = e.target.value || '';
    setValue(targetValue);
  };

  return [value, onChangeInput];
};
