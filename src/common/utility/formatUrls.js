import DATA from 'data';

// eslint-disable-next-line no-underscore-dangle
const _formatUrl = (selected) => {
  const [start, end] = selected.period.split('-');
  const iso3 = DATA.countriesISO3[selected.country];
  const variable = DATA.variables[selected.variable];
  const url = `/${selected.type}/${variable}/${start}/${end}/${iso3}.json`;
  return url;
};

export default (selected) => {
  const urls = [];
  if (selected.country === 'Yugoslavia') {
    DATA.countries
      // .filter((country) => ['Croatia', 'Slovenia'].includes(country))
      .forEach((country) => {
        const usr = _formatUrl({ ...selected, country });
        urls.push(usr);
      });
  } else {
    const usr = _formatUrl(selected);
    urls.push(usr);
  }
  return urls;
};
