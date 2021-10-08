const periods = ['1920-1939', '1940-1959', '1960-1979', '1980-1999'];

const countriesWithISO3 = [
  { name: 'Croatia', iso3: 'HRV' },
  { name: 'Slovenia', iso3: 'SVN' },
  { name: 'Serbia', iso3: 'SRB' },
  { name: 'Bosnia & Herzegovina', iso3: 'BIH' },
  { name: 'Montenegro', iso3: 'MNE' },
  { name: 'Macedonia', iso3: 'MKD' },
  { name: 'Yugoslavia', iso3: null },
];

const countries = countriesWithISO3.map(({ name }) => name);
const countriesISO3 = countriesWithISO3.reduce((acc, { name, iso3 }) => {
  acc[name] = iso3;
  return acc;
}, {});

export default {
  countriesISO3,
  countries,
  periods,
  type: {
    annual: 'annualavg',
    monthly: 'mavg',
  },
  variables: {
    temperature: 'tas',
    precipitation: 'pr',
  },
  initial: {
    country: countries[0],
    period: periods[0],
    variable: 'temperature',
    type: 'annual',
  },
};
