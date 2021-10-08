import { makeObservable } from 'common';
import { useEffect, useState } from 'react';

const dataPoint = makeObservable({
  open: false,
  point: { cmg: undefined, value: undefined },
});

export const observeOpenModal = (callback) =>
  dataPoint.observe('open', callback);
export const setOpenModal = (value) => {
  dataPoint.open = value;
};
export const useModalFormOpen = () => {
  const [state, setState] = useState(dataPoint.open);
  useEffect(() => {
    const unobserve = observeOpenModal(setState);
    return unobserve;
  }, []);
  return [state, setOpenModal];
};

export const observeDataPoint = (callback) =>
  dataPoint.observe('point', callback);
export const setDataPoint = (point) => {
  dataPoint.point = point;
};
