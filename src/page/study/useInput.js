import { useState, useCallback } from 'react';

export const useInput = (options) => {
  const { initialValue } = options || {};

  const [value, setValue] = useState(initialValue || '');

  const onChangeInput = useCallback((e) => {
    const targetValue = e.target.value || '';
    setValue(targetValue);
  });

  return [value, onChangeInput];
};
