import { useCallback, useEffect, useState } from 'react';
import { makeObservable } from 'common';
import DATA from 'data';

/** @type {import('./useClimateData').IClimateData} */
const climateData = makeObservable({
  selected: {
    country: DATA.initial.country,
    period: DATA.initial.period,
    variable: DATA.initial.variable,
    type: DATA.initial.type,
  },
  data: {},
});

/** @type {import('./useClimateData').getClimateData} */
export const getClimateData = (select) =>
  select ? climateData[select] : climateData;

/** @type {import('./useClimateData').setClimateData} */
// eslint-disable-next-line no-return-assign
export const setClimateData = (select, value) => {
  climateData[select] = { ...climateData[select], ...value };
};

/** @type {import('./useClimateData').hasClimateData} */
export const hasClimateData = (hash) => !!climateData.data[hash];

export const useClimateDataSelected = () => {
  const [state, setState] = useState(climateData.selected);

  useEffect(() => {
    const unobserve = climateData.observe('selected', (value) => {
      setState((oldState) => ({ ...oldState, ...value }));
    });
    return unobserve;
  }, []);
  const setData = useCallback((data) => {
    setClimateData('selected', data);
  }, []);
  return [state, setData];
};

export const useClimateData = () => {
  const [state, setState] = useState(climateData.data);
  useEffect(() => {
    const unobserve = climateData.observe('data', (value) => {
      setState((oldState) => ({ ...oldState, ...value }));
    });
    return unobserve;
  }, []);
  return state;
};
