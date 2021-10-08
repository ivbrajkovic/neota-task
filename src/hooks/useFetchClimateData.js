/* eslint-disable import/prefer-default-export */
import { setClimateData, hasClimateData } from 'hooks/useClimateData';

const baseUrl =
  'http://climatedataapi.worldbank.org/climateweb/rest/v1/country';

const doFetch = async (url) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.status.toString());

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json'))
    throw new Error("Oops, we haven't got JSON!");

  return response.json();
};

export const doFetchParallel = async (urls = []) => {
  const promises = [];

  urls.forEach((url) => {
    const isAlreadyFetched = hasClimateData(url);
    if (isAlreadyFetched) return;

    promises.push(
      doFetch(`${baseUrl}${url}`).then((data) => ({
        hash: url,
        data,
      }))
    );
  });

  if (!promises.length) return false;
  const res = await Promise.all(promises);

  const newData = {};
  res.forEach(({ hash, data }) => {
    newData[hash] = data;
  });

  setClimateData('data', newData);
  return true;
};
